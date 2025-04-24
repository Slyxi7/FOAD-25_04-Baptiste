### Quand tu lances ton serveur depuis WSL (comme ici dans /mnt/c/...), 127.0.0.1 ne correspond pas au même localhost que ton navigateur Windows.

💡 Solution :
Essaye avec l’adresse IP de ta machine WSL. 

Pour la connaître : ip addr show eth0

Tu verras une ligne comme : inet 172.20.219.142/20 ...

Essaie d’ouvrir dans ton navigateur : http://172.20.219.142:3000 