import fs from "fs";
import path from "path";
import Resume from "../models/Resume.js";
import upload from "../middlewares/uploadMiddleware.js";

export const uploadResumeImages = async (req, res) => {
    try {
        // Configure multer to handle thumbnail and profileImage fields
        upload.fields([{ name: "thumbnail" }, { name: "profileImage" }])(req, res, async (err) => {
            if (err) {
                return res.status(400).json({ message: "File upload failed", error: err.message });
            }

            const resumeId = req.params.id;
            const resume = await Resume.findOne({ _id: resumeId, userId: req.user._id });

            if (!resume) {
                return res.status(404).json({ message: "Resume not found or unauthorized" });
            }

            // Use process.cwd() to locate the uploads folder at project root
            const uploadsFolder = path.join(process.cwd(), "uploads");
            const baseUrl = `${req.protocol}://${req.get("host")}`;

            const newThumbnail = req.files.thumbnail?.[0];
            const newProfileImage = req.files.profileImage?.[0];

            if (newThumbnail) {
                // Delete old thumbnail if it exists
                if (resume.thumbnailLink) {
                    const oldThumbnail = path.join(uploadsFolder, path.basename(resume.thumbnailLink));
                    if (fs.existsSync(oldThumbnail)) fs.unlinkSync(oldThumbnail);
                }
                resume.thumbnailLink = `${baseUrl}/uploads/${newThumbnail.filename}`;
            }

            if (newProfileImage) {
                // Delete old profile preview if it exists
                if (resume.profileInfo?.profilePreviewUrl) {
                    const oldProfile = path.join(
                        uploadsFolder,
                        path.basename(resume.profileInfo.profilePreviewUrl)
                    );
                    if (fs.existsSync(oldProfile)) fs.unlinkSync(oldProfile);
                }
                resume.profileInfo.profilePreviewUrl = `${baseUrl}/uploads/${newProfileImage.filename}`;
            }

            await resume.save();

            res.status(200).json({
                message: "Images uploaded successfully",
                thumbnailLink: resume.thumbnailLink,
                profilePreviewUrl: resume.profileInfo.profilePreviewUrl,
            });
        });
    } catch (err) {
        console.error("Error uploading images:", err);
        res.status(500).json({ message: "Failed to upload images", error: err.message });
    }
};