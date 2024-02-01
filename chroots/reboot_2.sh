echo "Тестирование mouseless:"
echo "Проведите тест mouseless, нажав, например, alt+,"
echo ""
echo "(Рекомендуется отключить интеграцию мыши при использовании виртуальной машины. Так будет виден подлинный курсор, не всегда совпадающий с вашим.)"

echo ""

echo "Если не получается, то, скорее всего, нужно загрузить модуль uinput и перезагрузить систему:"
echo "echo \"uinput\" | sudo tee /etc/modules-load.d/uinput.conf && reboot"

echo ""

echo "Нажмите Enter, когда удостоверитесь, что mouseless работает для завершения установки."
read

clear

echo "Установка завершена. Нажмите Enter для закрытия и удаления остаточных файлов."

echo ""

echo "xrandr --listmonitors"
echo "xrandr --output Virtual-1 --mode 1280x720

read
