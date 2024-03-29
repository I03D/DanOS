#!/bin/bash

echo ""

echo "Войти в систему специальным chroot'ом от arch:"
echo "arch-chroot /mnt"
read

echo "Подобрать часовой пояс (с помощью tab), например: ln -sf /usr/share/zoneinfo/Europe/Moscow"
read

echo "Настройка аппаратных часов по системным..."
hwclock --systohc

echo ""

echo "Установка локалей..."
sed -i '/en_US\.UTF-8\ UTF-8/s/^#//g' /etc/locale.gen
sed -i '/ru_RU\.UTF-8\ UTF-8/s/^#//g' /etc/locale.gen

locale-gen

echo ""

echo "Введите имя компьютера, например: archpc"

read -e hostname

echo ""

echo "Создание /etc/hostname..."
echo $hostname >> /etc/hostname

echo ""

echo "Генерация /etc/hosts..."
echo >> /etc/hosts
echo 127.0.0.1	localhost >> /etc/hosts
echo ::1	localhost >> /etc/hosts
echo 127.0.0.1	$hostname.localdomain	$hostname >> /etc/hosts

echo ""

echo "Установка пароля для администратора:"
passwd

echo ""

echo "Установка NetworkManager..."
pacman -S --noconfirm networkmanager
systemctl enable NetworkManager

echo ""

echo "Установка загрузчика:"
pacman -S --noconfirm grub
echo ""
echo "------------------------------------------------------------"
echo "Если присутствуют другие ОС, которые grub должен распознать:"
echo "pacman -S os-prober fuse ntfs-3g hwinfo"
echo "Разрешить использование os-prober в конфигурации grub:"
echo "nvim /etc/default/grub"
echo "Откомментировать строку \"grub_disable_os_prober=\"true\"\""
echo "------------------------------------------------------------"
echo ""
echo "Установить Grub:"
echo "grub-install /dev/sdX"
echo "X - буква устройства."
read
grub-mkconfig -o /boot/grub/grub.cfg

echo ""

echo "Установка tmux..."
pacman -S --noconfirm tmux
echo ""

echo "Запись следующего скрипта в .profile для автозапуска..."
echo "if [ -z \"\$TMUX\" ]; then" >> /root/.profile
echo "    setfont /usr/share/kbd/consolefonts/cyr-sun16.psfu.gz" >> /root/.profile
echo "    sudo sh /opt/scripts/reboot_1a.sh" >> /root/.profile
echo "fi" >> /root/.profile
echo "" >> /root/.profile
