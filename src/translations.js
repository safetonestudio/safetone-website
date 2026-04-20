// SafeTone Studio — Complete Translations
// All site copy in EN and FR
// Usage: import { translations } from './translations'
// Access: translations[lang].page.section.key

export const translations = {

  // ════════════════════════════════════════════════════════════════
  // GLOBAL
  // ════════════════════════════════════════════════════════════════
  en: {

    global: {
      brand: 'SafeTone Studio',
      tagline: 'Localisation · Audio · GDPR',
      email: 'SafeToneStudio@proton.me',
      site: 'safetonestudio.com',
      siret: '103 340 857 00012',
      cta_quote: 'Get a Quote',
      cta_brief: 'Download the Project Brief',
      cta_how: 'See How It Works',
      cta_pricing: 'View full pricing →',
      cta_pipeline: 'See the full pipeline →',
      cta_dpa: 'Request the DPA →',
      vat: 'VAT not applicable — art. 293 B CGI',
      copyright: '© 2026 SafeTone Studio. All rights reserved.',
    },

    nav: {
      home: 'Home',
      services: 'Services',
      process: 'How It Works',
      pricing: 'Pricing',
      contact: 'Contact',
      lang_en: 'EN',
      lang_fr: 'FR',
    },

    footer: {
      tagline: 'Broadcast-quality FR↔EN video localization. Translation, dubbing, lip sync, voice cloning.',
      col_services: 'Services',
      col_studio: 'Studio',
      col_legal: 'Legal',
      link_translation: 'Translation',
      link_dubbing: 'Dubbing & Lip Sync',
      link_voice: 'Voice Cloning',
      link_audio: 'Audio Treatment',
      link_process: 'How It Works',
      link_pricing: 'Pricing',
      link_contact: 'Contact',
      link_gdpr: 'GDPR & Security',
      link_privacy: 'Privacy Policy',
      link_legal: 'Legal Notice',
    },

    // ════════════════════════════════════════════════════════════════
    // HOME
    // ════════════════════════════════════════════════════════════════
    home: {
      hero: {
        eyebrow: 'FR↔EN Professional Video Localization',
        headline_1: 'Speak Global.',
        headline_2: 'Sound Local.',
        subline: 'SafeTone Studio delivers broadcast-quality FR↔EN video localization for SaaS companies, e-learning platforms, and training organizations. Translation, dubbing, lip sync, and professional audio — handled by humans, delivered securely.',
        cta_primary: 'Get a Quote',
        cta_secondary: 'See How It Works',
      },

      trust: {
        label: 'Built for teams in:',
        items: ['SaaS', 'E-learning', 'Corporate Training', 'Digital Agencies'],
      },

      services: {
        eyebrow: 'What We Do',
        title: 'Your content, ready for the international market.',
        pillars: [
          {
            num: '01',
            title: 'Translation',
            text: 'Native C2-level localization. Supervised by a human at every step. Not machine translation. Not close enough. Exactly right.',
          },
          {
            num: '02',
            title: 'Dubbing & Lip Sync',
            text: 'AI-powered lip sync matched to the original speaker\'s mouth movements. Mixed and mastered by a professional sound engineer. AI speed. Human ears. Broadcast result.',
          },
          {
            num: '03',
            title: 'Voice Cloning',
            text: 'We reproduce the original speaker\'s voice — tone, cadence, character — transposed into the target language. Your brand voice. Recognizable in both languages.',
          },
          {
            num: '04',
            title: 'GDPR-Compliant Delivery',
            text: 'Stored on sovereign encrypted infrastructure. Outside US jurisdiction. Permanently deleted within 30 days of delivery. No exceptions.',
          },
          {
            num: '05',
            title: 'Broadcast Audio',
            text: 'Every delivery is mixed and mastered by a professional sound engineer. Not processed by an algorithm. Calibrated to your platform\'s loudness requirements. Broadcast-quality audio on every project.',
          },
        ],
      },

      why: {
        eyebrow: 'Why SafeTone',
        title: 'Translation. Dubbing. Broadcast audio. One studio. Full delivery.',
        subtitle: 'Three things that set us apart from every other localization provider.',
        cards: [
          {
            num: '01',
            title: 'Human quality at every critical step',
            text: 'Translation supervised by a native C2 speaker. Audio mixed and mastered by a professional sound engineer. AI handles the heavy lifting. Humans make the final call.',
          },
          {
            num: '02',
            title: 'Sovereign infrastructure',
            text: 'Your content is stored on sovereign encrypted infrastructure, outside US jurisdiction. A Data Processing Agreement is available on request.',
          },
          {
            num: '03',
            title: 'One studio. Full delivery.',
            text: 'Brief → Translation → Your approval → Production → Delivery. One contact. No handoffs. No surprises.',
          },
        ],
      },

      process: {
        eyebrow: 'The Process',
        title: 'Simple process. No surprises.',
        steps: [
          {
            num: '01',
            title: 'Brief & Deposit',
            text: 'You fill in the Project Brief and send your source file. 50% deposit confirms the start. Nothing begins without it.',
          },
          {
            num: '02',
            title: 'Translation & Your Approval',
            text: 'We localize the content and send you the translation draft. You approve it in writing before dubbing, lip sync, or a single frame is rendered. This protects your timeline and your content.',
          },
          {
            num: '03',
            title: 'Production & Delivery',
            text: 'Dubbing, lip sync, voice cloning, professional mix and master by a sound engineer, quality check — delivered via encrypted secure storage within the agreed timeline. Your content is deleted within 30 days.',
          },
        ],
        cta: 'See the full pipeline →',
      },

      pricing_teaser: {
        eyebrow: 'Pricing',
        title: 'Transparent pricing. No hidden fees.',
        subtitle: 'Every project includes translation, dubbing, lip sync, voice cloning, professional audio, and secure delivery.',
        pro: {
          tier: 'Professional',
          amount: '€210',
          unit: 'per minute · $245 for US clients',
          delivery: '5–7 business days after translation approval',
          features: [
            'FR↔EN translation (native C2)',
            'Dubbing, lip sync & voice cloning',
            'Mix & master by a sound engineer',
            'GDPR-compliant delivery',
            '1 consolidated revision round',
          ],
        },
        premium: {
          tier: 'Premium',
          amount: '€275',
          unit: 'per minute · $320 for US clients',
          delivery: '4–5 business days · Priority processing',
          features: [
            'Everything in Professional',
            '2 consolidated revision rounds',
            'Priority processing',
            'Response within 24 business hours',
          ],
        },
        cta: 'View full pricing →',
      },

      gdpr_block: {
        eyebrow: 'Compliance & Security',
        title: 'Your content. Sovereign infrastructure. Stored and delivered outside US jurisdiction.',
        items: [
          'Sovereign encrypted storage',
          'End-to-end encryption',
          'Outside US jurisdiction',
          'Permanently deleted within 30 days',
          'GDPR-compliant processing',
          'DPA available on request',
        ],
      },

      final_cta: {
        title: 'Ready to reach the French-speaking market?',
        subtitle: 'Send us your Project Brief and get a quote within 24 hours. No commitment. No sales call required.',
        cta_primary: 'Get a Quote',
        cta_secondary: 'Download the Project Brief',
      },
    },

    // ════════════════════════════════════════════════════════════════
    // SERVICES
    // ════════════════════════════════════════════════════════════════
    services: {
      hero: {
        eyebrow: 'What We Do',
        title: 'Every service your video needs to cross the language barrier.',
        subtitle: 'From the first word to the final master — SafeTone Studio handles the full FR↔EN localization chain so your content sounds like it was made in that language.',
      },
      list: [
        {
          eyebrow: 'Service 01',
          title: 'Native C2 Translation',
          what: 'Human-supervised FR↔EN translation at native level. Every script is handled by a linguist who lives in the language — not a tool that approximates it.',
          who: 'SaaS companies localizing product videos and onboarding content. E-learning platforms adapting course material for new markets. Training organizations expanding into French or English-speaking territories.',
          included: [
            'Full script translation FR↔EN',
            'Native C2 human supervision',
            'Terminology consistency (we work from your glossary)',
            'Client approval before production begins',
          ],
        },
        {
          eyebrow: 'Service 02',
          title: 'Professional Dubbing & AI Lip Sync',
          what: 'AI-powered lip sync that matches the localized audio to the original speaker\'s mouth movements — frame by frame, with broadcast precision.',
          who: 'Any organization that needs their video to look and sound like it was originally produced in the target language. Not subtitled. Not voiced over. Dubbed.',
          included: [
            'AI lip sync matched to source video',
            'Frame-accurate synchronization',
            'Visual quality check before delivery',
          ],
        },
        {
          eyebrow: 'Service 03',
          title: 'Voice Cloning',
          what: 'We reproduce the original speaker\'s voice — tone, cadence, character — and transpose it into the target language. Your content doesn\'t sound like a replacement voice. It sounds like you. In another language.',
          who: 'Organizations whose speaker\'s voice is a brand identity component. E-learning platforms where the instructor\'s voice builds a connection with learners. SaaS companies with recognizable spokesperson videos.',
          included: [
            'Voice analysis and reproduction',
            'FR↔EN transposition in the target language',
            'Vocal consistency across the entire project',
            'Full integration with the lip sync pipeline',
          ],
        },
        {
          eyebrow: 'Service 04',
          title: 'Professional Audio Treatment',
          what: 'Every SafeTone delivery is mixed and mastered by a human sound engineer — not processed by an algorithm, not left flat. Broadcast-quality audio, calibrated to your platform\'s specifications.',
          who: 'Teams who understand that bad audio kills good content. Anyone publishing on YouTube, LinkedIn, broadcast, or internal LMS platforms with loudness requirements.',
          included: [
            'Full audio mix by a professional sound engineer',
            'Platform-specific mastering (YouTube −14 LUFS · Broadcast −23 LUFS)',
            'Noise cleaning and level balancing',
            'Delivered in your required format',
          ],
        },
        {
          eyebrow: 'Service 05',
          title: 'Secure Delivery — Sovereign Infrastructure',
          what: 'Your content is never sent over unencrypted channels, never stored on servers outside our controlled environment, and never shared with third parties. Delivered via an encrypted secure link — end-to-end encrypted, outside US jurisdiction.',
          who: 'Any organization handling sensitive content, internal communications, or proprietary training material that cannot leave a controlled environment. Especially relevant for EU-based clients and US companies with European data obligations.',
          included: [
            'Encrypted secure delivery link',
            'Storage outside US jurisdiction',
            'Permanent deletion within 30 days of delivery',
            'Data Processing Agreement available on request',
            'No third-party relay, no intermediate server',
          ],
        },
      ],
      bottom_cta: {
        title: 'Need all of it? That\'s the point.',
        subtitle: 'Every SafeTone project includes translation, dubbing, lip sync, voice cloning, professional audio, and secure delivery — in one package, one price, one contact.',
        cta: 'Get a Quote',
      },
    },

    // ════════════════════════════════════════════════════════════════
    // HOW IT WORKS
    // ════════════════════════════════════════════════════════════════
    process: {
      hero: {
        eyebrow: 'The Process',
        title: 'Five steps. One studio. No handoffs, no surprises.',
        subtitle: 'Every SafeTone project follows the same structured pipeline — built to protect your content, your timeline, and your budget.',
      },
      steps: [
        {
          num: 'Step 01',
          title: 'Brief & Deposit',
          text: 'You complete the Project Brief with your specs — source language, target language, format, deadline, glossary. A 50% non-refundable deposit confirms the start. We don\'t begin without it. You don\'t pay the rest until delivery.',
        },
        {
          num: 'Step 02',
          title: 'Translation',
          text: 'Our native C2 linguist localizes the full script FR↔EN. We send you the translation draft for review. This is your first checkpoint — and the most important one.',
        },
        {
          num: 'Step 03',
          title: 'Your Approval',
          text: 'You review the translation and send written feedback. You have 2 business days. Silence is treated as approval and production begins. Nothing moves to production without your sign-off. This protects your timeline. It also protects your content.',
        },
        {
          num: 'Step 04',
          title: 'Dubbing, Lip Sync, Voice Cloning & Audio Production',
          text: 'Once approved, we move to production. The localized script is dubbed with the original speaker\'s cloned voice, transposed into the target language. AI lip sync is applied frame by frame to match the localized audio to the original speaker\'s mouth movements. The full audio track is then mixed and mastered by a professional sound engineer to broadcast standards.',
        },
        {
          num: 'Step 05',
          title: 'Delivery',
          text: 'Your finished file is delivered via an encrypted secure link. End-to-end encrypted. Outside US jurisdiction. You have 5 business days to raise any written issues. Your content is permanently deleted from our systems within 30 days.',
        },
      ],
      timelines: {
        title: 'How long does it take?',
        items: [
          'Professional: 5–7 business days after translation approval.',
          'Premium: 4–5 business days after translation approval. Priority processing. Dedicated response within 24 business hours.',
          'Rush delivery: available for projects of 10 minutes or less. +40% surcharge. Delivery within 24 hours of production start.',
          'Note: Timelines begin after your written approval of the translation — not from the date of your order.',
        ],
      },
      revisions: {
        title: 'Revisions — clear rules, no surprises.',
        items: [
          'Professional: 1 consolidated revision round included. You send all feedback in a single written document within 5 business days of delivery. We respond within 48 business hours.',
          'Premium: 2 consolidated revision rounds included. Same rules apply per round.',
          'Included at no charge: any technical error attributable to SafeTone Studio. Corrupted or incomplete files.',
          'Opens a revision round: tone or style changes. Content additions. Terminology updates not covered in the original brief.',
          'Quoted separately: changes to the source script. Rework exceeding 20% of the delivered content.',
          'Additional rounds beyond included scope: +€80 per round.',
          'Revisions submitted more than 5 business days after delivery: quoted separately.',
        ],
      },
      cta: 'Download the Project Brief',
    },

    // ════════════════════════════════════════════════════════════════
    // PRICING
    // ════════════════════════════════════════════════════════════════
    pricing: {
      hero: {
        eyebrow: 'Pricing',
        title: 'Transparent pricing. No hidden fees. No surprises.',
        subtitle: 'Every project includes translation, dubbing, lip sync, voice cloning, professional audio, and secure delivery. One price. Everything included.',
      },
      tiers: {
        pro: {
          tier: 'Professional',
          amount: '€210',
          unit: 'per minute',
          us_note: '$245/min for US clients',
          delivery: '5–7 business days after translation approval',
          minimum: 'Minimum billing: 3 minutes per project',
          features: [
            'FR↔EN translation (native C2)',
            'Dubbing, AI lip sync & voice cloning',
            'Mix & master by a sound engineer',
            'GDPR-compliant delivery',
            '1 consolidated revision round',
          ],
        },
        premium: {
          tier: 'Premium',
          amount: '€275',
          unit: 'per minute',
          us_note: '$320/min for US clients',
          delivery: '4–5 business days after translation approval',
          minimum: 'Minimum billing: 3 minutes per project',
          features: [
            'Everything in Professional',
            '2 consolidated revision rounds',
            'Priority processing',
            'Dedicated response within 24 business hours',
          ],
        },
      },
      examples: {
        title: 'Typical project costs',
        note: '* 3-minute minimum billing applies per project',
        headers: ['Content', 'Duration', 'Professional', 'Premium'],
        rows: [
          ['Ad spot', '3 min*', '€630', '€825'],
          ['Product demo', '3 min*', '€630', '€825'],
          ['E-learning module', '5 min', '€1,050', '€1,375'],
          ['Training course', '10 min', '€2,100', '€2,750'],
        ],
      },
      surcharges: {
        title: 'Surcharges & additional fees',
        items: [
          'Rush delivery (+40%): available for projects of 10 minutes or less. Delivery within 24 hours of production start.',
          'Out-of-hours (+20%): if production must start outside Mon–Fri, 09:00–18:00 Paris time.',
          'Additional revision round: +€80 per round beyond included scope.',
          'Late revision: revisions submitted more than 5 business days after delivery are quoted separately.',
        ],
      },
      volume: {
        title: 'Working together regularly?',
        items: [
          'Retainer (−10%): 10+ minutes per month. Requires a signed monthly commitment addendum.',
          'Large Volume (−15%): 50+ minutes per month. Requires a signed monthly commitment addendum.',
          'Discounts are not cumulative. Without a signed addendum, standard rates apply.',
        ],
      },
      payment: {
        title: 'Payment conditions',
        items: [
          '50% non-refundable deposit required before work begins',
          'Balance due within 15 days of delivery',
          'Wire transfer only — SEPA (EU clients) · ACH (US clients)',
          'No cards accepted',
          'Invoiced in EUR or USD depending on your location',
          'VAT not applicable — art. 293 B CGI',
          'Late payment: 1.5%/month from day 16 + €40 flat administrative fee',
        ],
      },
      bottom_cta: {
        title: 'Not sure how many minutes your project is?',
        subtitle: 'Send us your source file and we\'ll calculate it for you — no commitment, no sales call.',
        cta: 'Get a Quote',
      },
    },

    // ════════════════════════════════════════════════════════════════
    // CONTACT
    // ════════════════════════════════════════════════════════════════
    contact: {
      hero: {
        eyebrow: 'Contact',
        title: 'Let\'s talk about your project.',
        subtitle: 'Download the Project Brief, fill it in, and send it directly to SafeToneStudio@proton.me. No form. No intermediary. Just your brief and a quote within 24 hours.',
      },
      form: {
        first_name: 'First Name *',
        last_name: 'Last Name *',
        company: 'Company *',
        email: 'Email Address *',
        project_type_label: 'Project Type',
        project_type_options: [
          'Select...',
          'FR to EN localization',
          'EN to FR localization',
          'Both directions',
          'Not sure yet',
        ],
        duration_label: 'Estimated Duration',
        duration_options: [
          'Select...',
          'Under 3 minutes',
          '3–10 minutes',
          '10–30 minutes',
          '30+ minutes',
        ],
        tier_label: 'Tier',
        tier_options: [
          'Select...',
          'Professional',
          'Premium',
          'Not sure yet',
        ],
        message_label: 'Message (optional)',
        message_placeholder: 'Any context, deadline, or questions you\'d like to share.',
        submit: 'Send my project →',
        success: 'Sent ✓',
      },
      info: {
        title: 'We don\'t do sales calls.',
        response_label: 'Response Time',
        response_text: 'Professional clients — within 48 business hours\nPremium clients — within 24 business hours',
        contact_label: 'Direct Contact',
        confidentiality_label: 'Confidentiality',
        confidentiality_text: 'All information shared via this form is treated as strictly confidential and processed in accordance with our Privacy Policy.',
        brief_label: 'Prefer to send everything at once?',
        brief_text: 'Download the Project Brief, fill it in, and attach it to your message.',
        brief_cta: 'Download the Project Brief →',
        closing: 'You send a brief. We send a quote. We get to work.',
      },
    },

    // ════════════════════════════════════════════════════════════════
    // GDPR
    // ════════════════════════════════════════════════════════════════
    gdpr: {
      hero: {
        eyebrow: 'Compliance & Security',
        title: 'Your content. Sovereign infrastructure.',
        subtitle: 'At SafeTone Studio, data protection is not a checkbox. It\'s an architectural decision made from day one — and a contractual commitment on every project.',
      },
      badges: [
        { icon: '🔒', label: 'Sovereign encrypted storage' },
        { icon: '🌍', label: 'Outside US jurisdiction' },
        { icon: '🛡️', label: 'GDPR-compliant processing' },
        { icon: '🗑️', label: 'Deleted within 30 days' },
        { icon: '📄', label: 'DPA available on request' },
      ],
      blocks: [
        {
          title: 'Storage & Delivery',
          items: [
            'Sovereign encrypted storage — end-to-end encrypted',
            'Outside US CLOUD Act jurisdiction',
            'EU adequacy decision — transfers are fully GDPR-compliant without additional safeguards',
          ],
        },
        {
          title: 'Production',
          items: [
            'Translation, audio mixing and mastering performed entirely on local encrypted hardware — no cloud',
            'GDPR-compliant processing infrastructure — DPA in place',
            'No third-party relay — no intermediate server',
          ],
        },
        {
          title: 'Deletion — guaranteed within 30 days',
          text: 'All files are permanently deleted within 30 days of final delivery — contractually guaranteed in every SafeTone Studio service agreement. Deletion can be confirmed in writing within 5 business days on written request.',
        },
        {
          title: 'Data Processing Agreement',
          text: 'A GDPR-compliant DPA is available on request for all clients who require one — particularly organizations subject to strict compliance obligations (healthcare, finance, education, public sector). Contact us to request your DPA.',
        },
      ],
      summary: {
        title: 'In summary',
        items: [
          'Storage: sovereign encrypted infrastructure',
          'Production: 100% local — no cloud',
          'GDPR-compliant processing: DPA in place',
          'Deletion: guaranteed within 30 days — contractual',
          'US CLOUD Act: immune',
          'DPA: available on request',
        ],
      },
      cta: {
        title: 'Specific compliance requirements?',
        subtitle: 'Get in touch. We\'ll send you the full DPA and answer your compliance questions within 24 hours.',
        btn: 'Request the DPA →',
      },
    },

    // ════════════════════════════════════════════════════════════════
    // PRIVACY POLICY
    // ════════════════════════════════════════════════════════════════
    privacy: {
      hero: {
        eyebrow: 'Legal',
        title: 'Privacy Policy',
        subtitle: 'Last updated: April 2026',
      },
      sections: [
        {
          title: '1. Who We Are',
          text: 'SafeTone Studio is a sole trader registered in France. Contact: SafeToneStudio@proton.me — safetonestudio.com',
        },
        {
          title: '2. Data We Collect',
          text: 'When you use the contact form, we collect only: your first and last name, your professional email address, your company name, and information relating to your project. We do not collect payment data via this website. We do not use advertising cookies or third-party tracking tools.',
        },
        {
          title: '3. Purpose of Processing',
          text: 'Data collected via the contact form is used exclusively to respond to your quote request, manage your project if an engagement is confirmed, and contact you regarding your request if necessary. It is never sold, shared, or transferred to third parties for commercial purposes.',
        },
        {
          title: '4. Retention Period',
          text: 'Your contact data is retained for 3 years from your last interaction with SafeTone Studio, then permanently deleted. Content entrusted to us during a project (videos, scripts, audio files) is permanently deleted within 30 days of final delivery.',
        },
        {
          title: '5. Legal Basis',
          text: 'Processing is based on your explicit consent, given at the time of form submission, in accordance with Article 6(1)(a) of Regulation (EU) 2016/679 (GDPR).',
        },
        {
          title: '6. Your Rights',
          text: 'Under GDPR, you have the right to access, rectify, erase, restrict, and port your personal data, and to object to processing. To exercise any of these rights: SafeToneStudio@proton.me. We respond to all requests within 30 days. You also have the right to lodge a complaint with your national supervisory authority.',
        },
        {
          title: '7. Security',
          text: 'All communications with SafeTone Studio use end-to-end encrypted channels. Your data is stored on Swiss-based infrastructure covered by an EU adequacy decision — treated as equivalent to EU data protection standards under GDPR.',
        },
      ],
    },

    // ════════════════════════════════════════════════════════════════
    // LEGAL NOTICE
    // ════════════════════════════════════════════════════════════════
    legal: {
      hero: {
        eyebrow: 'Legal',
        title: 'Legal Notice',
        subtitle: '',
      },
      sections: [
        {
          title: 'Publisher',
          text: 'SafeTone Studio\nSIRET: 103 340 857 00012\nLéognan (33850), Bordeaux, France\nSaféToneStudio@proton.me\nsafetonestudio.com\nVAT not applicable — art. 293 B CGI',
        },
        {
          title: 'Hosting',
          text: 'GitHub, Inc.\n88 Colin P. Kelly Jr. Street\nSan Francisco, CA 94107, USA\ngithub.com',
        },
        {
          title: 'Intellectual Property',
          text: 'All content on this website — texts, visuals, structure, and brand — is the exclusive property of SafeTone Studio. Any reproduction, representation, or distribution, even partial, without prior written consent is prohibited.',
        },
        {
          title: 'Liability',
          text: 'SafeTone Studio makes every effort to keep the information on this site accurate and up to date. We cannot be held liable for any errors or omissions, or for the consequences of their use. Links to third-party sites are provided for information purposes only.',
        },
        {
          title: 'Mediation',
          text: 'In case of dispute, you may use conventional mediation via the Centre de Médiation et d\'Arbitrage de Paris (CMAP): www.cmap.fr',
        },
      ],
    },

  }, // end EN

  // ════════════════════════════════════════════════════════════════
  // FRENCH
  // ════════════════════════════════════════════════════════════════
  fr: {

    global: {
      brand: 'SafeTone Studio',
      tagline: 'Localisation · Audio · RGPD',
      email: 'SafeToneStudio@proton.me',
      site: 'safetonestudio.com',
      siret: '103 340 857 00012',
      cta_quote: 'Obtenir un devis',
      cta_brief: 'Télécharger le Brief Projet',
      cta_how: 'Voir comment ça marche',
      cta_pricing: 'Voir les tarifs complets →',
      cta_pipeline: 'Voir le pipeline complet →',
      cta_dpa: 'Demander le DPA →',
      vat: 'TVA non applicable — art. 293 B CGI',
      copyright: '© 2026 SafeTone Studio. Tous droits réservés.',
    },

    nav: {
      home: 'Accueil',
      services: 'Services',
      process: 'Notre Process',
      pricing: 'Tarifs',
      contact: 'Contact',
      lang_en: 'EN',
      lang_fr: 'FR',
    },

    footer: {
      tagline: 'Localisation vidéo FR↔EN qualité broadcast. Traduction, doublage, lip sync, clonage vocal.',
      col_services: 'Services',
      col_studio: 'Studio',
      col_legal: 'Légal',
      link_translation: 'Traduction',
      link_dubbing: 'Doublage & Lip Sync',
      link_voice: 'Clonage Vocal',
      link_audio: 'Traitement Audio',
      link_process: 'Notre Fonctionnement',
      link_pricing: 'Tarifs',
      link_contact: 'Contact',
      link_gdpr: 'RGPD & Sécurité',
      link_privacy: 'Politique de Confidentialité',
      link_legal: 'Mentions Légales',
    },

    home: {
      hero: {
        eyebrow: 'Localisation Vidéo FR↔EN Professionnelle',
        headline_1: 'Parlez Global.',
        headline_2: 'Sonnez Local.',
        subline: 'SafeTone Studio localise vos vidéos anglais vers français — ou français vers anglais — avec une qualité broadcast professionnelle. Traduction, doublage, lip sync, et audio professionnel — traités par des humains, livrés de façon sécurisée.',
        cta_primary: 'Obtenir un devis',
        cta_secondary: 'Voir comment ça marche',
      },

      trust: {
        label: 'Conçu pour :',
        items: ['SaaS', 'E-learning', 'Formation professionnelle', 'Agences digitales'],
      },

      services: {
        eyebrow: 'Ce que nous faisons',
        title: 'Votre contenu, prêt pour le marché international.',
        pillars: [
          {
            num: '01',
            title: 'Traduction',
            text: 'Localisation FR↔EN niveau C2 natif. Supervisée par un humain à chaque étape. Pas une approximation. Le mot juste, à chaque fois.',
          },
          {
            num: '02',
            title: 'Doublage & Lip Sync',
            text: 'Synchronisation labiale IA calée sur les mouvements de bouche du locuteur original. Mixé et masterisé par un ingénieur du son professionnel. Vitesse IA. Oreilles humaines. Résultat broadcast.',
          },
          {
            num: '03',
            title: 'Clonage Vocal',
            text: 'Nous reproduisons la voix du locuteur original — ton, cadence, caractère — transposée dans la langue cible. Votre voix de marque. Reconnaissable dans les deux langues.',
          },
          {
            num: '04',
            title: 'Livraison conforme RGPD',
            text: 'Stocké sur infrastructure souveraine chiffrée. Hors juridiction américaine. Supprimé définitivement sous 30 jours après livraison. Sans exception.',
          },
          {
            num: '05',
            title: 'Audio Broadcast',
            text: 'Chaque livraison est mixée et masterisée par un ingénieur du son professionnel. Pas un algorithme. Calibré selon les exigences de loudness de votre plateforme. Audio qualité broadcast sur chaque projet.',
          },
        ],
      },

      why: {
        eyebrow: 'Pourquoi SafeTone',
        title: 'Traduction. Doublage. Audio broadcast. Un studio. Une livraison complète.',
        subtitle: 'Trois choses qui nous distinguent de tout autre prestataire de localisation.',
        cards: [
          {
            num: '01',
            title: 'La qualité humaine à chaque étape critique',
            text: 'Traduction supervisée par un locuteur natif C2. Audio mixé et masterisé par un ingénieur du son professionnel. L\'IA fait le travail lourd. Les humains ont le dernier mot.',
          },
          {
            num: '02',
            title: 'Infrastructure souveraine',
            text: 'Votre contenu est stocké sur infrastructure souveraine chiffrée, hors juridiction américaine. Un Accord de Traitement des Données est disponible sur demande.',
          },
          {
            num: '03',
            title: 'Un studio. Une livraison complète.',
            text: 'Brief → Traduction → Votre validation → Production → Livraison. Un seul interlocuteur. Aucun transfert. Aucune surprise.',
          },
        ],
      },

      process: {
        eyebrow: 'Le Process',
        title: 'Un process simple. Zéro surprise.',
        steps: [
          {
            num: '01',
            title: 'Brief & Acompte',
            text: 'Vous complétez le Brief Projet et envoyez votre fichier source. L\'acompte de 50% confirme le démarrage. Rien ne commence sans lui.',
          },
          {
            num: '02',
            title: 'Traduction & Votre Validation',
            text: 'Nous localisons le contenu et vous soumettons le script traduit. Vous validez par écrit avant le doublage, le lip sync ou qu\'une seule image ne soit traitée. C\'est votre garantie sur le résultat final.',
          },
          {
            num: '03',
            title: 'Production & Livraison',
            text: 'Doublage, lip sync, clonage vocal, mixage et mastering par un ingénieur du son, contrôle qualité — livré via stockage sécurisé chiffré dans le délai convenu. Votre contenu est supprimé sous 30 jours.',
          },
        ],
        cta: 'Voir le pipeline complet →',
      },

      pricing_teaser: {
        eyebrow: 'Tarifs',
        title: 'Des tarifs clairs. Aucun frais caché.',
        subtitle: 'Chaque projet comprend traduction, doublage, lip sync, clonage vocal, audio professionnel et livraison sécurisée.',
        pro: {
          tier: 'Professionnel',
          amount: '€210',
          unit: 'par minute',
          delivery: '5–7 jours ouvrés après validation de la traduction',
          features: [
            'Traduction FR↔EN (C2 natif)',
            'Doublage, lip sync & clonage vocal',
            'Mixage & mastering par ingénieur du son',
            'Livraison conforme RGPD',
            '1 round de révision consolidé',
          ],
        },
        premium: {
          tier: 'Premium',
          amount: '€275',
          unit: 'par minute',
          delivery: '4–5 jours ouvrés · Traitement prioritaire',
          features: [
            'Tout ce qui est dans Professionnel',
            '2 rounds de révision consolidés',
            'Traitement prioritaire',
            'Réponse sous 24 heures ouvrées',
          ],
        },
        cta: 'Voir les tarifs complets →',
      },

      gdpr_block: {
        eyebrow: 'Conformité & Sécurité',
        title: 'Votre contenu. Infrastructure souveraine. Stocké et livré hors juridiction américaine.',
        items: [
          'Stockage chiffré souverain',
          'Chiffrement de bout en bout',
          'Hors juridiction américaine',
          'Supprimé définitivement sous 30 jours',
          'Traitement conforme RGPD',
          'DPA disponible sur demande',
        ],
      },

      final_cta: {
        title: 'Prêt à conquérir de nouveaux marchés ?',
        subtitle: 'Envoyez-nous votre Brief Projet et recevez un devis sous 24 heures. Sans engagement. Sans appel commercial.',
        cta_primary: 'Obtenir un devis',
        cta_secondary: 'Télécharger le Brief Projet',
      },
    },

    services: {
      hero: {
        eyebrow: 'Ce que nous faisons',
        title: 'Tout ce dont votre vidéo a besoin pour franchir la barrière de la langue.',
        subtitle: 'Du premier mot au master final — SafeTone Studio prend en charge toute la chaîne de localisation FR↔EN pour que votre contenu sonne comme s\'il avait été conçu dans cette langue.',
      },
      list: [
        {
          eyebrow: 'Service 01',
          title: 'Traduction native C2',
          what: 'Localisation FR↔EN supervisée par un humain de niveau natif. Chaque script est traité par un linguiste qui vit dans la langue — pas un outil qui l\'approxime.',
          who: 'Entreprises SaaS qui localisent leurs vidéos produit et contenus d\'onboarding. Plateformes e-learning qui adaptent leurs modules pour de nouveaux marchés. Organismes de formation qui s\'étendent vers des territoires francophones ou anglophones.',
          included: [
            'Traduction complète du script FR↔EN',
            'Supervision humaine niveau C2 natif',
            'Cohérence terminologique (nous travaillons depuis votre glossaire)',
            'Validation client avant le démarrage de la production',
          ],
        },
        {
          eyebrow: 'Service 02',
          title: 'Doublage professionnel & Lip Sync IA',
          what: 'Synchronisation labiale IA qui cale l\'audio localisé sur les mouvements de bouche du locuteur original — image par image, avec une précision broadcast.',
          who: 'Toute organisation qui veut que sa vidéo paraisse avoir été produite dans la langue cible dès le départ. Pas sous-titrée. Pas simplement doublée à la va-vite. Vraiment localisée.',
          included: [
            'Lip sync IA calé sur la vidéo source',
            'Synchronisation frame par frame',
            'Contrôle visuel qualité avant livraison',
          ],
        },
        {
          eyebrow: 'Service 03',
          title: 'Clonage Vocal',
          what: 'Nous reproduisons la voix du locuteur original — ton, cadence, caractère — et la transposons dans la langue cible. Votre contenu ne sonne pas comme une voix de remplacement. Il sonne comme vous. Dans une autre langue.',
          who: 'Toute organisation dont la voix du locuteur est une composante de l\'identité de marque. Les plateformes e-learning où la voix de l\'instructeur crée un lien avec l\'apprenant. Les entreprises SaaS dont les vidéos produit sont narrées par un visage et une voix identifiables.',
          included: [
            'Analyse et reproduction de la voix source',
            'Transposition FR↔EN dans la langue cible',
            'Cohérence vocale sur l\'ensemble du projet',
            'Intégration complète dans le pipeline lip sync & audio',
          ],
        },
        {
          eyebrow: 'Service 04',
          title: 'Traitement Audio Professionnel',
          what: 'Chaque livraison SafeTone est mixée et masterisée par un ingénieur du son humain — pas traitée par un algorithme, pas livrée à plat. Audio qualité broadcast, calibré selon les specs de votre plateforme.',
          who: 'Les équipes qui savent qu\'un mauvais son tue un bon contenu. Toute organisation qui publie sur YouTube, LinkedIn, en broadcast, ou sur des plateformes LMS avec des exigences de loudness précises.',
          included: [
            'Mixage complet par un ingénieur du son professionnel',
            'Mastering spécifique à votre plateforme (YouTube −14 LUFS · Broadcast −23 LUFS)',
            'Nettoyage des bruits et équilibrage des niveaux',
            'Livré dans le format requis',
          ],
        },
        {
          eyebrow: 'Service 05',
          title: 'Livraison Sécurisée — Infrastructure Souveraine',
          what: 'Votre contenu n\'est jamais transmis via des canaux non chiffrés, jamais stocké hors de notre environnement contrôlé, jamais partagé avec des tiers. Livraison via un lien chiffré sécurisé — chiffrement bout en bout, hors juridiction américaine.',
          who: 'Toute organisation traitant des contenus sensibles, des communications internes ou des supports de formation propriétaires ne pouvant pas quitter un environnement contrôlé. Particulièrement pertinent pour les clients européens et les entreprises américaines ayant des obligations de conformité en Europe.',
          included: [
            'Livraison via lien chiffré sécurisé',
            'Stockage hors juridiction américaine',
            'Suppression définitive sous 30 jours après livraison',
            'Accord de Traitement des Données disponible sur demande',
            'Aucun relais tiers, aucun serveur intermédiaire',
          ],
        },
      ],
      bottom_cta: {
        title: 'Tout est inclus. C\'est le principe.',
        subtitle: 'Chaque projet SafeTone comprend traduction, doublage, lip sync, clonage vocal, audio professionnel et livraison sécurisée — en un seul package, un seul tarif, un seul interlocuteur.',
        cta: 'Obtenir un devis',
      },
    },

    process: {
      hero: {
        eyebrow: 'Le Process',
        title: 'Cinq étapes. Un studio. Aucun transfert, aucune surprise.',
        subtitle: 'Chaque projet SafeTone suit le même pipeline structuré — conçu pour protéger votre contenu, votre délai et votre budget.',
      },
      steps: [
        {
          num: 'Étape 01',
          title: 'Brief & Acompte',
          text: 'Vous complétez le Brief Projet avec vos spécifications — langue source, langue cible, format, deadline, glossaire. L\'acompte de 50% non remboursable confirme le démarrage. Nous ne commençons pas sans lui. Vous ne payez le solde qu\'à la livraison.',
        },
        {
          num: 'Étape 02',
          title: 'Traduction',
          text: 'Notre linguiste natif C2 localise l\'intégralité du script FR↔EN. Nous vous soumettons le brouillon de traduction pour relecture. C\'est votre premier point de contrôle — et le plus important.',
        },
        {
          num: 'Étape 03',
          title: 'Votre Validation',
          text: 'Vous relisez la traduction et transmettez vos retours par écrit. Vous disposez de 2 jours ouvrés. Un silence est traité comme une validation et la production démarre. Rien ne passe en production sans votre accord. Cela protège votre délai. Cela protège aussi votre contenu.',
        },
        {
          num: 'Étape 04',
          title: 'Doublage, Lip Sync, Clonage Vocal & Production Audio',
          text: 'Une fois validé, nous passons en production. Le script localisé est doublé avec la voix clonée du locuteur original, transposée dans la langue cible. Le lip sync IA est appliqué image par image pour synchroniser l\'audio localisé sur les mouvements de bouche du locuteur original. La piste audio complète est ensuite mixée et masterisée par un ingénieur du son professionnel aux normes broadcast.',
        },
        {
          num: 'Étape 05',
          title: 'Livraison',
          text: 'Votre fichier finalisé est livré via un lien chiffré sécurisé. Chiffré bout en bout. Hors juridiction américaine. Vous disposez de 5 jours ouvrés pour soulever des réserves écrites. Votre contenu est supprimé définitivement de nos systèmes sous 30 jours.',
        },
      ],
      timelines: {
        title: 'Combien de temps ça prend ?',
        items: [
          'Professionnel : 5–7 jours ouvrés après validation de la traduction.',
          'Premium : 4–5 jours ouvrés après validation de la traduction. Traitement prioritaire. Réponse dédiée sous 24 heures ouvrées.',
          'Livraison urgente : disponible pour les projets de 10 minutes ou moins. Majoration de 40%. Livraison sous 24 heures après démarrage de la production.',
          'À noter : les délais commencent après votre validation écrite de la traduction — pas à compter de la date de commande.',
        ],
      },
      revisions: {
        title: 'Révisions — des règles claires, sans surprise.',
        items: [
          'Professionnel : 1 round de révision consolidé inclus. Vous transmettez l\'ensemble de vos retours en un seul document écrit dans les 5 jours ouvrés suivant la livraison. Nous répondons sous 48 heures ouvrées.',
          'Premium : 2 rounds de révision consolidés inclus. Les mêmes règles s\'appliquent par round.',
          'Inclus sans frais supplémentaires : toute erreur technique imputable à SafeTone Studio. Fichiers corrompus ou incomplets.',
          'Ce qui ouvre un round de révision : changement de ton ou de style. Ajouts de contenu. Mise à jour terminologique non couverte dans le brief initial.',
          'Ce qui est devisé séparément : modifications du script source. Refonte dépassant 20% du contenu livré.',
          'Round supplémentaire hors cadre : +80 € par round.',
          'Révisions transmises plus de 5 jours ouvrés après livraison : devisées séparément.',
        ],
      },
      cta: 'Télécharger le Brief Projet',
    },

    pricing: {
      hero: {
        eyebrow: 'Tarifs',
        title: 'Des tarifs clairs. Aucun frais caché. Aucune surprise.',
        subtitle: 'Chaque projet comprend traduction, doublage, lip sync, clonage vocal, audio professionnel et livraison sécurisée. Un prix. Tout inclus.',
      },
      tiers: {
        pro: {
          tier: 'Professionnel',
          amount: '€210',
          unit: 'par minute',
          us_note: null,
          delivery: '5–7 jours ouvrés après validation de la traduction',
          minimum: 'Minimum de facturation : 3 minutes par projet',
          features: [
            'Traduction FR↔EN (C2 natif)',
            'Doublage, lip sync IA & clonage vocal',
            'Mixage & mastering par ingénieur du son',
            'Livraison conforme RGPD',
            '1 round de révision consolidé',
          ],
        },
        premium: {
          tier: 'Premium',
          amount: '€275',
          unit: 'par minute',
          us_note: null,
          delivery: '4–5 jours ouvrés après validation de la traduction',
          minimum: 'Minimum de facturation : 3 minutes par projet',
          features: [
            'Tout ce qui est dans Professionnel',
            '2 rounds de révision consolidés',
            'Traitement prioritaire',
            'Réponse dédiée sous 24 heures ouvrées',
          ],
        },
      },
      examples: {
        title: 'Exemples de coûts projet',
        note: '* Minimum de facturation 3 minutes par projet',
        headers: ['Contenu', 'Durée', 'Professionnel', 'Premium'],
        rows: [
          ['Spot publicitaire', '3 min*', '€630', '€825'],
          ['Démo produit', '3 min*', '€630', '€825'],
          ['Module e-learning', '5 min', '€1 050', '€1 375'],
          ['Formation', '10 min', '€2 100', '€2 750'],
        ],
      },
      surcharges: {
        title: 'Majorations & frais additionnels',
        items: [
          'Livraison urgente (+40%) : disponible pour les projets de 10 minutes ou moins. Livraison sous 24 heures après démarrage de la production.',
          'Hors heures ouvrées (+20%) : si le démarrage de la production est requis hors lun–ven, 09h–18h, heure de Paris.',
          'Round de révision supplémentaire : +80 € par round au-delà du cadre inclus.',
          'Révision hors délai : révisions transmises plus de 5 jours ouvrés après livraison — devisées séparément.',
        ],
      },
      volume: {
        title: 'Vous travaillez régulièrement ?',
        items: [
          'Retainer (−10%) : 10+ minutes par mois. Nécessite la signature d\'un avenant d\'engagement mensuel.',
          'Grand Volume (−15%) : 50+ minutes par mois. Nécessite la signature d\'un avenant d\'engagement mensuel.',
          'Les remises ne sont pas cumulables. Sans avenant signé, les tarifs standards s\'appliquent.',
        ],
      },
      payment: {
        title: 'Conditions de paiement',
        items: [
          'Acompte de 50% non remboursable requis avant démarrage',
          'Solde dû sous 15 jours après livraison',
          'Virement bancaire uniquement — SEPA',
          'Aucun paiement par carte accepté',
          'Facturation en EUR',
          'TVA non applicable — art. 293 B CGI',
          'Retard de paiement : 1,5%/mois à compter du 16e jour + forfait 40 € d\'indemnité',
        ],
      },
      bottom_cta: {
        title: 'Vous ne savez pas combien de minutes fait votre projet ?',
        subtitle: 'Envoyez-nous votre fichier source et nous le calculons pour vous — sans engagement, sans appel commercial.',
        cta: 'Obtenir un devis',
      },
    },

    contact: {
      hero: {
        eyebrow: 'Contact',
        title: 'Parlons de votre projet.',
        subtitle: 'Téléchargez le Brief Projet, complétez-le et envoyez-le directement à SafeToneStudio@proton.me. Pas de formulaire. Pas d\'intermédiaire. Juste votre brief et un devis sous 24 heures.',
      },
      form: {
        first_name: 'Prénom *',
        last_name: 'Nom *',
        company: 'Société *',
        email: 'Adresse email *',
        project_type_label: 'Type de projet',
        project_type_options: [
          'Sélectionner...',
          'Localisation FR vers EN',
          'Localisation EN vers FR',
          'Les deux directions',
          'Pas encore défini',
        ],
        duration_label: 'Durée estimée',
        duration_options: [
          'Sélectionner...',
          'Moins de 3 minutes',
          '3 à 10 minutes',
          '10 à 30 minutes',
          'Plus de 30 minutes',
        ],
        tier_label: 'Tier souhaité',
        tier_options: [
          'Sélectionner...',
          'Professionnel',
          'Premium',
          'Pas encore défini',
        ],
        message_label: 'Message (optionnel)',
        message_placeholder: 'Contexte, deadline ou questions que vous souhaitez partager.',
        submit: 'Envoyer mon projet →',
        success: 'Envoyé ✓',
      },
      info: {
        title: 'Pas d\'appel commercial.',
        response_label: 'Délai de réponse',
        response_text: 'Clients Professionnel — sous 48 heures ouvrées\nClients Premium — sous 24 heures ouvrées',
        contact_label: 'Contact direct',
        confidentiality_label: 'Confidentialité',
        confidentiality_text: 'Toutes les informations partagées via ce formulaire sont traitées de manière strictement confidentielle, conformément à notre Politique de Confidentialité.',
        brief_label: 'Vous préférez tout envoyer d\'un coup ?',
        brief_text: 'Téléchargez le Brief Projet, complétez-le et joignez-le à votre message.',
        brief_cta: 'Télécharger le Brief Projet →',
        closing: 'Vous envoyez un brief. Nous envoyons un devis. On travaille.',
      },
    },

    gdpr: {
      hero: {
        eyebrow: 'Conformité & Sécurité',
        title: 'Votre contenu. Infrastructure souveraine.',
        subtitle: 'Chez SafeTone Studio, la protection de vos données n\'est pas une case à cocher. C\'est une décision d\'architecture prise dès le départ — et un engagement contractuel sur chaque mission.',
      },
      badges: [
        { icon: '🔒', label: 'Stockage chiffré souverain' },
        { icon: '🌍', label: 'Hors juridiction américaine' },
        { icon: '🛡️', label: 'Traitement conforme RGPD' },
        { icon: '🗑️', label: 'Supprimé sous 30 jours' },
        { icon: '📄', label: 'DPA disponible sur demande' },
      ],
      blocks: [
        {
          title: 'Stockage & Livraison',
          items: [
            'Stockage chiffré souverain — chiffrement de bout en bout',
            'Hors portée du US CLOUD Act',
            'Décision d\'adéquation UE — transferts conformes au RGPD sans mesures supplémentaires',
          ],
        },
        {
          title: 'Production',
          items: [
            'Traduction, mixage et mastering audio réalisés entièrement sur matériel local chiffré — aucun cloud',
            'Infrastructure de traitement conforme RGPD — DPA en vigueur',
            'Aucun relais tiers — aucun serveur intermédiaire',
          ],
        },
        {
          title: 'Suppression — garantie sous 30 jours',
          text: 'Tous les fichiers sont supprimés définitivement sous 30 jours après la livraison finale — garanti contractuellement dans chaque contrat de prestation SafeTone Studio. La suppression peut être confirmée par écrit sous 5 jours ouvrés sur demande écrite.',
        },
        {
          title: 'Accord de Traitement des Données',
          text: 'Un Accord de Traitement des Données (DPA) conforme au RGPD est disponible sur demande pour tous les clients qui en ont besoin — notamment les organisations soumises à des obligations de conformité strictes (santé, finance, éducation, secteur public). Contactez-nous pour demander votre DPA.',
        },
      ],
      summary: {
        title: 'En résumé',
        items: [
          'Stockage : infrastructure souveraine chiffrée',
          'Production : 100% locale — aucun cloud',
          'Traitement conforme RGPD : DPA en vigueur',
          'Suppression : garantie sous 30 jours — contractuelle',
          'US CLOUD Act : immunisé',
          'DPA : disponible sur demande',
        ],
      },
      cta: {
        title: 'Vous avez des exigences de conformité spécifiques ?',
        subtitle: 'Contactez-nous. Nous vous transmettons le DPA complet et répondons à vos questions de conformité sous 24 heures.',
        btn: 'Demander le DPA →',
      },
    },

    privacy: {
      hero: {
        eyebrow: 'Légal',
        title: 'Politique de Confidentialité',
        subtitle: 'Dernière mise à jour : avril 2026',
      },
      sections: [
        {
          title: '1. Qui nous sommes',
          text: 'SafeTone Studio est une entreprise enregistrée en France. Contact : SafeToneStudio@proton.me — safetonestudio.com',
        },
        {
          title: '2. Données collectées',
          text: 'Lorsque vous utilisez le formulaire de contact, nous collectons uniquement : votre prénom et nom, votre adresse email professionnelle, le nom de votre société, et les informations relatives à votre projet. Nous ne collectons aucune donnée de paiement via ce site. Nous n\'utilisons aucun cookie publicitaire ou outil de tracking tiers.',
        },
        {
          title: '3. Finalité du traitement',
          text: 'Les données collectées via le formulaire de contact sont utilisées exclusivement pour répondre à votre demande de devis, assurer le suivi de votre projet si une mission est engagée, et vous contacter en cas de besoin lié à votre demande. Elles ne sont jamais revendues, partagées ou transmises à des tiers à des fins commerciales.',
        },
        {
          title: '4. Durée de conservation',
          text: 'Vos données de contact sont conservées pendant 3 ans à compter de votre dernière interaction avec SafeTone Studio, puis supprimées définitivement. Les contenus confiés dans le cadre d\'une mission (vidéos, scripts, fichiers audio) sont supprimés définitivement dans les 30 jours suivant la livraison finale.',
        },
        {
          title: '5. Base légale',
          text: 'Le traitement de vos données repose sur votre consentement explicite, exprimé au moment de la soumission du formulaire de contact, conformément à l\'article 6(1)(a) du Règlement (UE) 2016/679 (RGPD).',
        },
        {
          title: '6. Vos droits',
          text: 'Conformément au RGPD, vous disposez des droits d\'accès, de rectification, d\'effacement, de limitation du traitement, de portabilité et d\'opposition. Pour exercer l\'un de ces droits : SafeToneStudio@proton.me. Nous répondons à toute demande dans un délai de 30 jours. Vous disposez également du droit d\'introduire une réclamation auprès de la CNIL (www.cnil.fr).',
        },
        {
          title: '7. Sécurité',
          text: 'Toutes les communications avec SafeTone Studio s\'effectuent via des canaux chiffrés de bout en bout. Vos données sont stockées sur une infrastructure basée en Suisse, couverte par une décision d\'adéquation UE — traitée comme équivalente aux normes de protection des données européennes au titre du RGPD.',
        },
      ],
    },

    legal: {
      hero: {
        eyebrow: 'Légal',
        title: 'Mentions Légales',
        subtitle: '',
      },
      sections: [
        {
          title: 'Éditeur du site',
          text: 'SafeTone Studio\nSIRET : 103 340 857 00012\nLéognan (33850), Bordeaux, France\nSafeToneStudio@proton.me\nsafetonestudio.com\nTVA non applicable — art. 293 B CGI',
        },
        {
          title: 'Hébergement',
          text: 'GitHub, Inc.\n88 Colin P. Kelly Jr. Street\nSan Francisco, CA 94107, USA\ngithub.com',
        },
        {
          title: 'Propriété Intellectuelle',
          text: 'L\'ensemble des contenus présents sur ce site — textes, visuels, structure et marque — est la propriété exclusive de SafeTone Studio. Toute reproduction, représentation ou diffusion, même partielle, sans autorisation écrite préalable est interdite.',
        },
        {
          title: 'Limitation de Responsabilité',
          text: 'SafeTone Studio s\'efforce de maintenir les informations publiées sur ce site à jour et exactes. Nous ne saurions être tenus responsables d\'éventuelles erreurs ou omissions, ni des conséquences de leur utilisation.',
        },
        {
          title: 'Médiation',
          text: 'En cas de litige, vous pouvez recourir à une médiation conventionnelle via le Centre de Médiation et d\'Arbitrage de Paris (CMAP) : www.cmap.fr',
        },
      ],
    },

  }, // end FR

}; // end translations

export default translations;
