import React from 'react';
import '@testing-library/jest-dom';
import { test, expect, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import Hero from '../src/components/Hero';
import Contact from '../src/components/Contact';
import { experiences, profile, projects, skillGroups } from '../src/data/portfolio';
import { awsServices, certifications } from '../src/data/certifications';

describe('portfolio data', () => {
    test('exposes the profile details from the resume', () => {
        expect(profile.name).toBe('Joshua Aranda Emmanuel Moreno');
        expect(profile.email).toBe('joshuamoreno21@gmail.com');
        expect(profile.location).toBe('Mérida, Yucatán');
        expect(profile.github).toContain('joshmorenx');
    });

    test('includes every work experience from the resume', () => {
        const companies = experiences.map((exp) => exp.company);
        expect(companies).toEqual(['IT Talent', 'NodeNetwork', 'Decorama Estudio', 'CentroGeo']);
        expect(experiences[0].role).toBe('Full Stack Developer');
        expect(experiences[0].current).toBe(true);
    });

    test('includes the key projects and skill groups', () => {
        const titles = projects.map((p) => p.title);
        expect(titles).toContain('NodeNetwork');
        expect(titles).toContain('CEDES');
        // AWS leads the skill groups now that it's certified
        expect(skillGroups[0].title).toBe('AWS & Cloud');
        expect(skillGroups.length).toBeGreaterThanOrEqual(8);
    });

    test('lists the AWS Cloud Practitioner certification', () => {
        expect(certifications).toHaveLength(1);
        const [cert] = certifications;
        expect(cert.name).toBe('AWS Certified Cloud Practitioner');
        expect(cert.level).toBe('Foundational');
        expect(cert.verifyUrl).toContain('credly.com/badges/7ea15458-1078-4eaa-8aee-2c618ac1c526');
        expect(awsServices.map((s) => s.name)).toContain('Lambda');
    });
});

describe('Hero', () => {
    test('renders the name, headline and resume download', () => {
        render(<Hero />);
        expect(screen.getByText(/Hi, I'm Joshua/i)).toBeInTheDocument();
        expect(screen.getAllByText(/Aranda/).length).toBeGreaterThan(0);
        const resumeLinks = screen.getAllByRole('link', { name: /download resume/i });
        expect(resumeLinks[0]).toHaveAttribute('href', expect.stringContaining('CV_Joshua_Aranda_Moreno.pdf'));
    });
});

describe('Contact', () => {
    test('renders the resume contact channels', () => {
        render(<Contact />);
        expect(screen.getByText(profile.email)).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /github\.com\/joshmorenx/i })).toHaveAttribute('href', profile.github);
        expect(screen.getByRole('link', { name: /whatsapp/i })).toHaveAttribute('href', profile.whatsapp);
    });
});
