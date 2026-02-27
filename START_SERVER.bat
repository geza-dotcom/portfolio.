@echo off
echo ========================================
echo Starting Portfolio Backend Server
echo ========================================
echo.

cd server

echo Checking Python installation...
python --version
if errorlevel 1 (
    echo Python is not installed or not in PATH
    echo Please install Python 3.7 or higher from https://www.python.org/
    pause
    exit /b 1
)

echo.
echo Installing dependencies...
pip install -r requirements.txt

echo.
echo Starting Flask server...
echo Server will be available at http://localhost:5000
echo Press Ctrl+C to stop the server
echo.

python app.py

pause
