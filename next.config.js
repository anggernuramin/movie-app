/** @type {import('next').NextConfig} */
const nextConfig = {
    //  jika kita ingin menggunakan components Images dari nextjs maka kita perlu mendaftarkan terlebih dahulu hostname untuk source gambarnya
    images: {
        remotePatterns: [
            {
                hostname: "cdn.myanimelist.net"
            }
        ]

    }
}

module.exports = nextConfig
