Date : Feb 03, 2025

Trainee : Abdul Najir Ansari

Training : Linux Fundamentals & File System


Details: 
- Setup WSL (Windows System Linux) 
- Basic Linux commands
- Permissions :- Owner, Group & Others
- Linux File Systems 

-------------------------------------------
Date : Feb 04, 2025

Trainee : Abdul Najir Ansari

Training : Shell Scripting


Details: 
- Basic Shell Scripting 
- Includes binaries executables inside shell script
- Conditional Statements and Loops
- Pratical Implementation of Basic shell command
- Executable script files

--------------------------------------------------------

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
--------------------------------------------------------------------------------------

# Day 4:

Date : Feb 06, 2025

Trainee : Abdul Najir Ansari

Training :  Core JavaScript Fundamentals &  Higher Order Functions


Details:
- Basic javascript 
- DOM Tree
- Event Handling
- Higher Order Function(map(),find(), forEach(),filter(),Reduce())
- Simple projects use Higher-Order Functions

--------------------------------------------------------------------------------------

# Day 5:

Date : Feb 07, 2025

Trainee : Abdul Najir Ansari

Training :  JavaScript Concept and Basic React js 


Details:

- html css js form and table handling, AJAX  implements simple project user management   
- Learned JavaScript Call Stack, Event Loop, and Execution Order
- Learned  react lifecycle

--------------------------------------------------------------------------------
# Day 6:

Date : Feb 10, 2025

Trainee : Abdul Najir Ansari

Training :  JavaScript validation Form 

Details:
- Form Validation using js 
- learned React lifecycle Components
- learned basic typescript


----------------------------------------------------------
Date : Feb 12, 2025

Trainee : Abdul Najir Ansari

Training : Form validation using class in js and react js setup 

Details:
- Form Validation using js
- Shadcn Setup

---------------------------------------------------------------
Date : Feb 13, 2025

Trainee : Abdul Najir Ansari

Training : React js, Tailwind css and Basic Next js

Details:
- Built a Portfoilio website using react/vite and tailwind css and typescript
- Basic Next js : SSR, SSG and App Routing
- Next js setup 
- 