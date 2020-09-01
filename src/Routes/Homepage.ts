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
                title: 'Secure payments',
                image: '',
                details: 'We use first class AI-assisted security to secure your data and payment information.'
            },
            {
                title: 'Secure sign up with Bank account',
                image: '',
                details: 'Sign up with your bank account to get your information pre-loaded and ready to go in less than 5 minutes!'
            },
            {
                title: 'Custom Debit Card',
                image: '',
                details: 'Use the pooled money with a custom Cashr Debit Card',
            }, {
                title: 'Cashr Groups',
                image: '',
                details: 'Organize your payment groups and social circles with Cashr groups'
            },
            {
                title: 'AI-Assisted Financial analysis and tips',
                image: '',
                details: 'Stay finaically educated about your money with our AI assisted tips and account analysis for free!'
            }
        ]
    }
    res.send(content);
});

export default homepageRouter;