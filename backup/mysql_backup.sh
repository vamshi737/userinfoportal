#!/bin/bash

# MySQL database credentials
USER="root"
PASSWORD="Vamsi321"
DATABASE="user_info"

# Backup directory
BACKUP_DIR="/c/UserInfoPortal/backup"

# Date format for the backup file
DATE=$(date +"%Y-%m-%d_%H-%M-%S")

# MySQL dump command to create a backup
mysqldump -u $USER -p$PASSWORD $DATABASE > "$BACKUP_DIR/backup_$DATABASE_$DATE.sql"

# Optional: Delete backups older than 7 days
find $BACKUP_DIR -type f -name "*.sql" -mtime +7 -exec rm {} \;
