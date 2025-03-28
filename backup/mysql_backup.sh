#!/bin/bash

# MySQL database credentials
USER="root"
PASSWORD="Vamsi321"  # Use your MySQL root password
DATABASE="user_info"

# Backup directory (change as needed)
BACKUP_DIR="/path/to/your/backup/folder"

# Date format for the backup file
DATE=$(date +"%Y-%m-%d_%H-%M-%S")

# MySQL dump command to create a backup
mysqldump -u $USER -p$PASSWORD $DATABASE > "$BACKUP_DIR/backup_$DATABASE_$DATE.sql"

# Optional: Delete backups older than 7 days
find $BACKUP_DIR -type f -name "*.sql" -mtime +7 -exec rm {} \;
