<script setup lang="ts">
useHead({
    script: [
        {
            type: 'application/ld+json',
            innerHTML: JSON.stringify({
                '@context': 'https://schema.org',
                '@graph': [
                    {
                        '@type': 'WebSite',
                        '@id': 'https://www.sakurayukina.com/#website',
                        url: 'https://www.sakurayukina.com/',
                        name: 'SIANG-JYUN Portfolio',
                        inLanguage: ['zh-TW', 'en-US']
                    },
                    {
                        '@type': 'ProfilePage',
                        '@id': 'https://www.sakurayukina.com/#profilepage',
                        url: 'https://www.sakurayukina.com/',
                        name: 'SIANG-JYUN | 前端工程師 — Portfolio',
                        isPartOf: { '@id': 'https://www.sakurayukina.com/#website' },
                        mainEntity: { '@id': 'https://www.sakurayukina.com/#person' }
                    },
                    {
                        '@type': 'Person',
                        '@id': 'https://www.sakurayukina.com/#person',
                        name: '鄭翔駿',
                        alternateName: 'SIANG-JYUN',
                        url: 'https://www.sakurayukina.com/',
                        jobTitle: 'Frontend Engineer',
                        worksFor: {
                            '@type': 'Organization',
                            name: 'Vamos Internet Co., Ltd.',
                            url: 'https://www.sakurayukina.com/'
                        },
                        alumniOf: {
                            '@type': 'CollegeOrUniversity',
                            name: '義守大學',
                            department: '資訊工程學系'
                        },
                        knowsAbout: [
                            'Vue.js', 'Nuxt', 'React', 'Next.js', 'TypeScript',
                            'Tailwind CSS', 'Flutter', 'MediaPipe', 'YOLOv8'
                        ],
                        hasCredential: {
                            '@type': 'EducationalOccupationalCredential',
                            name: 'ISO 27001 ISMS Lead Auditor'
                        },
                        sameAs: ['https://github.com/sakura0711']
                    }
                ]
            })
        }
    ]
})
</script>

<template>
    <div>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
    </div>
</template>
