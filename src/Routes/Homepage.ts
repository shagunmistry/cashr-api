import express, { Request, Response } from 'express';

const homepageRouter = express.Router();

/**
 * Features:
 * - Secure Payments
 * - Secure bank account + debit/credit card account linking
 * - Debit card to use anywhere by anyone of the people
 * - Cashr groups dependingo on topic
 * - One money account for many
 * - Using AI to suggest saving money and transaction analysis
 */

homepageRouter.get('/', (req: Request, res: Response) => {
    const content = {
        pageTitle: 'Welcome to Cashr!',
        pageSubtitle: 'The place where Social AI meets money pooling and money management',
        features: [
            {
                title: 'Cashr Security',
                image: 'https://storage.googleapis.com/cashr-415.appspot.com/Assets/money-security.png',
                details: 'We use first class AI-assisted fraud detection and AI-assisted monitoring to ensure your data is secure as you and your friends exchange money.'
            },
            {
                title: 'Custom Debit Card',
                image: 'https://storage.googleapis.com/cashr-415.appspot.com/Assets/money-heart.png',
                details: 'Use the collected money anywhere* with a custom Cashr Debit Card.',
            }, {
                title: 'Cashr Groups',
                image: 'https://storage.googleapis.com/cashr-415.appspot.com/Assets/groups-birthday.png',
                details: 'Organize your payment groups and social circles with Cashr groups.'
            },
            {
                title: 'Account analysis and Personalized Financial Tips',
                image: 'https://storage.googleapis.com/cashr-415.appspot.com/Assets/money-tips.png',
                details: 'Stay finaically educated about your money with our AI-assisted tips and account analysis for free!'
            }
        ]
    }
    res.send(content);
});

export default homepageRouter;