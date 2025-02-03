const express = require('express');
const router = express.Router();
const userModel = require('../models/users');
const bcrypt = require('bcryptjs');

// ✅ Serve Reset Password Page from Frontend
router.get('/reset-password/:token', (req, res) => {
    const { token } = req.params;
    return res.redirect(`https://sanjeevani-wine.vercel.app/reset-password/${token}`);
});

// ✅ Handle Password Reset Request
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

        // Securely hash the new password
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;
        await user.save();

        res.json({ message: 'Password reset successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error resetting password' });
    }
});

module.exports = router;
