@echo off
:: 1. 进入简历目录
cd /d "C:\Users\17226\Downloads\Riven-Resume"

echo [1/3] 正在打包网页 (Building)...
:: 运行打包命令，根据你用的工具可能是 npm run build 或 yarn build
call npm run build

echo [2/3] 正在准备推送至 GitHub (Git Add & Commit)...
:: 把所有修改添加到暂存区
git add .
:: 自动添加时间戳作为提交信息
set commit_msg=Update Resume: %date% %time%
git commit -m "%commit_msg%"

echo [3/3] 正在同步到 GitHub (Git Push)...
:: 推送到远端仓库，这会触发 Vercel 自动部署
git push

echo ========================================
echo 同步完成！
echo Vercel 正在后台更新...
echo 本地 Dist 已刷新，Cloudflare 隧道已同步。
echo ========================================
pause