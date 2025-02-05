Date : Feb 05, 2025

Trainee : Abdul Najir Ansari

Training : Crontab, Cronjob and Basic of HTML & CSS


Details: 
- learning crontab , cronjob and includes Tasks
- Basics HTML 
- Fundamental of CSS
- Semantic HTML
- Creation of simple webpage using HTML and CSS 

```

!/bin/bash

# Define log file path
LOG_FILE="/home/aayan/projects_file/process_monitor.log"

# Add timestamp to log file
echo "===== $(date) =====" >> $LOG_FILE

# Capture top 5 CPU-consuming processes
echo "Top 5 CPU-consuming processes:" >> $LOG_FILE
ps -eo pid,ppid,cmd,%cpu,%mem --sort=-%cpu | head -n 6 >> $LOG_FILE

# Capture top 5 Memory-consuming processes
echo "" >> $LOG_FILE
echo "Top 5 Memory-consuming processes:" >> $LOG_FILE
ps -eo pid,ppid,cmd,%cpu,%mem --sort=-%mem | head -n 6 >> $LOG_FILE

# Add a separator for readability
echo -e "\n====================================\n" >> $LOG_FILE



````
## Output
┌──(aayan㉿DESKTOP-QIF5KKI)-[~/projects_file]
└─$ cat /home/aayan/projects_file/process_monitor.log
  PID  PPID %CPU %MEM
  424   423  0.0  0.0
  425   424  0.0  0.1
  449   424  0.0  0.0
  463   424  0.0  0.4
  485   424  0.0  0.5
===== Wed Feb  5 12:58:54 PM +0545 2025 =====
#Top 5 CPU-consuming processes:
  PID  PPID CMD                         %CPU %MEM
  424   423 /init                        0.0  0.0
  425   424 -bash                        0.0  0.1
  449   424 /usr/bin/dbus-daemon --sysl  0.0  0.0
  463   424 /usr/libexec/xdg-desktop-po  0.0  0.4
  485   424 /usr/libexec/xdg-desktop-po  0.0  0.5

#Top 5 Memory-consuming processes:
  PID  PPID CMD                         %CPU %MEM
  485   424 /usr/libexec/xdg-desktop-po  0.0  0.5
  463   424 /usr/libexec/xdg-desktop-po  0.0  0.4
  507   424 /usr/libexec/at-spi2-regist  0.0  0.2
  498   424 /usr/libexec/gvfsd-fuse /mn  0.0  0.2
  492   424 /usr/libexec/gvfsd           0.0  0.1

====================================

