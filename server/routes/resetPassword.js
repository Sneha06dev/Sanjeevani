const express = require('express');
const router = express.Router();
const userModel = require('../models/users');
const bcrypt = require('bcryptjs');
const path = require('path'); // Ensure this is imported

// Handle password reset request
router.post('/reset-password', async (req, res) => {
    const { token, newPassword } = req.body;

    try {
        const user = await userModel.findOne({
            resetPasswordToken: token,
            resetPasswordExpires: { $gt: Date.now() }
        });

        if (!user) {
            return res.status(400).json({ message: 'Invalid or expired token' });
        }

        user.password = bcrypt.hashSync(newPassword, 10);
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;
        await user.save();

        res.json({ message: 'Password reset successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error resetting password' });
    }
});

// Serve the reset password HTML file
router.get('/reset-password/:token', (req, res) => {
    const filePath = path.join(__dirname, '../public/resetPassword.html');
    res.sendFile(filePath);
});

module.exports = router;
