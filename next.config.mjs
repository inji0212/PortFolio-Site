// next.config.mjs
import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // 경로 별칭 설정: @를 src 폴더로 매핑
    config.resolve.alias["@"] = path.resolve(process.cwd(), "src");

    // 파일 확장자 추가: .ts와 .tsx 파일도 인식하도록 설정
    config.resolve.extensions.push(".ts", ".tsx");

    return config;
  },
};

export default nextConfig;
