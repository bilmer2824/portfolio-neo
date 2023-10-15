/** @type {import('next').NextConfig} */
module.exports = {
    // your existing configuration...

    images: {
        domains: ['portfoliobilmer.pythonanywhere.com'],
    },
    env: {
        GOOGLE_ANALYTICS_ID: 'G-CBD7KWSDWW',
    },
    youtube: {
        source: '/embed/:path*',
        destination: 'https://www.youtube.com/embed/:path*',
    },
}