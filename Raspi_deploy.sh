set -e

# 設定顏色
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
RED='\033[0;31m'
RESET='\033[0m'  # Reset顏色

# 輸出顏色化訊息
echo -e "${CYAN}git repo 同步中...${RESET}"
git status 
git pull

echo -e "${YELLOW}同步 Nuxt 檔案...${RESET}"
sudo chown -R sakura:sakura /mnt/smbshare/yukina-profile/.output
sudo chmod -R 777 /mnt/smbshare/yukina-profile/.output
sudo rsync -avh --delete /mnt/smbshare/yukina-profile/.output/. /var/www/nuxt/

echo -e "${GREEN}重啟 PM2 Nuxt 應用...${RESET}"
pm2 delete nuxt-app
pm2 start /var/www/nuxt/server/index.mjs --name nuxt-app
pm2 save

echo -e "${CYAN}重新啟動 Nginx...${RESET}"
sudo systemctl restart nginx

echo -e "${GREEN}部署完成！${RESET}"
