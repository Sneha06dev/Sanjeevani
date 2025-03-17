# Sanjeevani

Welcome to Sanjeevani, your ultimate marketplace for herbs, medicinal plants, kitchen garden plants, woods, and more! Sanjeevani aims to provide a comprehensive platform where enthusiasts and experts alike can discover, purchase, and learn about a diverse array of botanical treasures.


https://github.com/user-attachments/assets/6463ecf9-02ea-4762-bdf9-95a8e11d026f



## Features

### Product Categories

Explore a wide range of botanical offerings including:
- **Herbs**: From culinary herbs to medicinal herbs, find everything you need to cultivate your own herb garden.
- **Medicinal Plants**: Discover plants with healing properties and learn about their traditional and modern uses.
- **Kitchen Garden Plants**: Grow your own fresh produce with our selection of kitchen garden plants.
- **Woods and Timber**: Source sustainably harvested woods and timber for various projects.

### Forgot Password Facility via Nodemailer

Easily reset your password with our secure Nodemailer-powered email service. If you forget your password, simply request a reset, and you'll receive a secure link in your email. Follow the link to set a new password and regain access to your account hassle-free.

### Payment Gateway Integration

Enjoy seamless and secure transactions with our integrated Braintree payment gateway. Whether you're purchasing rare herbs or planning a garden overhaul, you can trust that your payments are processed with industry-leading security standards.

### Search and Filter Options

Effortlessly find the products you're looking for using our intuitive search and powerful filtering options. Filter by plant name, price and more to quickly narrow down your choices.


https://github.com/user-attachments/assets/71ca8591-4d11-4dab-82a5-595d7f5ef6cc


### Admin Panel

Manage your GreenPetals store efficiently with our robust admin panel:
- **Product Management**: Add new products, update existing ones, and manage inventory effortlessly.
- **Order Management**: Track orders in real-time, update order statuses, and handle customer inquiries.
- **Review Management**: Monitor customer reviews, respond to feedback, and maintain a positive reputation.
- **Category Update**: Can update categories in real time.

### Real-Time Updates

Keep track of your orders and cart status in real-time. As orders are placed and updated, you'll have instant visibility and control over your purchases.

### Reviews Section

Share your experiences with GreenPetals products and read reviews from fellow plant enthusiasts. Your feedback helps us improve our offerings and ensures a vibrant community experience.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript (React.js)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Payment Gateway**: Braintree
- **Other Tools**: Bootstrap (for real-time updates)

# PlantTherapy

PlantTherapy is Sanjeevani's AI ChatBot platform dedicated to:
- **Finding Solutions to Health Problems**: Leveraging the power of plants and herbs, we offer insights into natural remedies for common health issues. Whether you're looking for the best herb to alleviate a toothache or a plant to soothe a rash, PlantTherapy provides scientifically-backed information to help you make informed decisions about your health.
- **Exploring the Plant World**: Our platform encourages users to dive into the fascinating world of plants. Learn about different species, their unique properties, and how they contribute to our well-being and the environment.
- **Nurturing and Caring for Plants**: At PlantTherapy, we believe in the importance of nurturing plants. Our guides and resources are designed to help you grow and care for your garden, whether it's a small kitchen garden or a larger outdoor space. Discover tips and techniques for maintaining healthy plants and ensuring they thrive.

Our goal is to empower users with practical and reliable information to enhance their gardening and herbal remedy practices.

PlantTherapy relies on the Gemini AI API provided by Google to deliver accurate plant-related information. Here is how to use the platform:

**API Key Setup**: Obtain your Gemini AI API key from the [Google Developers website](https://developers.google.com). Add your API key to the environment variables:
    ```bash
    API_KEY=your_api_key_here
    ```

## API Testing

Before integrating the Gemini API into PlantTherapy, we tested the API key using Postman to ensure it was accepting POST requests correctly. Here’s how you can do it:

1. **Set Up Postman**:
   - Open Postman and create a new POST request.
   - In the URL field, enter the Gemini API endpoint provided by Google.

2. **Add Headers**:
   - Add the required headers, such as `Content-Type: application/json` and `Authorization: Bearer your_api_key_here`.

3. **Send a Request**:
   - Construct the body of your request with the necessary parameters and data.
   - Send the request and check the response to verify that the API key is working correctly.

This step is significant as it ensures that the API integration will function smoothly within the PlantTherapy platform.
## Contributing

We welcome contributions to improve GreenPetals! If you'd like to contribute:

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.

Please adhere to the code style and conventions used in the project.

