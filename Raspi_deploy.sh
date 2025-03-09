set -e

echo "git repo 同步中"
git status 
git pull

echo "同步 Nuxt 檔案..."
sudo chown -R sakura:sakura /mnt/smbshare/yukina-profile/.output
sudo chmod -R 777 /mnt/smbshare/yukina-profile/.output
sudo rsync -avh --delete /mnt/smbshare/yukina-profile/.output/. /var/www/nuxt/

echo "重啟 PM2 Nuxt 應用..."
pm2 delete nuxt-app
pm2 start /var/www/nuxt/server/index.mjs --name nuxt-app
pm2 save

echo "重新啟動 Nginx..."
sudo systemctl restart nginx

echo "部署完成！"
