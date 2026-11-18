/**
 * Certifications.
 * Details pulled from the public Credly badge:
 * https://www.credly.com/badges/7ea15458-1078-4eaa-8aee-2c618ac1c526
 */

export interface Certification {
    name: string;
    shortName: string;
    issuer: string;
    level: string;
    issued: string;
    expires: string;
    verifyUrl: string;
    description: string;
    skills: string[];
}

export const certifications: Certification[] = [
    {
        name: 'AWS Certified Cloud Practitioner',
        shortName: 'Cloud Practitioner',
        issuer: 'Amazon Web Services Training and Certification',
        level: 'Foundational',
        issued: 'Jul 2026',
        expires: 'Jul 2029',
        verifyUrl: 'https://www.credly.com/badges/7ea15458-1078-4eaa-8aee-2c618ac1c526',
        description:
            'Earners of this certification have a fundamental understanding of IT services and their uses in the AWS Cloud. They demonstrated cloud fluency and foundational AWS knowledge, and can identify the essential AWS services needed to set up AWS-focused projects.',
        skills: ['Cloud Concepts', 'AWS Core Services', 'Security & Compliance', 'Billing & Pricing', 'Cloud Architecture']
    }
];

/** The AWS services used in production at Fundación Rafael Dondé. */
export interface AwsService {
    name: string;
    what: string;
}

export const awsServices: AwsService[] = [
    { name: 'Lambda', what: 'Serverless compute for banking endpoints' },
    { name: 'Step Functions', what: 'Orchestrating multi-step transfer flows' },
    { name: 'API Gateway', what: 'Public and internal REST entry points' },
    { name: 'SQS', what: 'Queued, resilient message delivery' },
    { name: 'Serverless Framework', what: 'Infrastructure as code & deploys' }
];
