
echo "同步 Nuxt 檔案..."
rsync -av --delete /mnt/smbshare/yukin-profile/.output/ /var/www/nuxt/

echo "重啟 PM2 Nuxt 應用..."
pm2 delete nuxt-app
pm2 start /var/www/nuxt/server/index.mjs --name nuxt-app

echo "重新啟動 Nginx..."
sudo systemctl restart nginx

echo "部署完成！"
