@echo off
:: 设置编码为 UTF-8 解决中文乱码
chcp 65001 >nul
setlocal enabledelayedexpansion

:: 1. 进入简历目录
cd /d "C:\Users\17226\Downloads\Riven-Resume"

echo [1/3] 正在打包网页 (Vite Build)...
call npm run build

echo [2/3] 正在同步到 GitHub...
git add .

:: 自动获取当前日期时间作为提交信息
set commit_msg=Update Resume: %date% %time%
git commit -m "%commit_msg%"

echo [3/3] 正在执行 Git Push...
git push

echo ========================================
echo ✅ 同步完成！
echo 1. GitHub 已接收更新
echo 2. Vercel 正在自动重新部署
echo 3. 本地 dist 目录已刷新，Cloudflare 隧道同步生效
echo ========================================
pause