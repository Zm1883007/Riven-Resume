Set WshShell = CreateObject("WScript.Shell")

' Start resume web server
WshShell.CurrentDirectory = "C:\Users\17226\Downloads\Riven-Resume\dist"
WshShell.Run "python -m http.server 8080", 0, False

' Start cloudflared tunnel
WshShell.Run "cloudflared tunnel run --token eyJhIjoiZGUwMWQwMjNmOTAyZGM5YjU5ZTU4NmU4M2U1MmMxNjYiLCJ0IjoiYzA0ZWM3NjktMzBkMC00ZmJmLWI2MzAtZjliNWJhNDlmNDMxIiwicyI6Ik4yWmxZVFprWWpZdE9XWXhOUzAwTWpkaExXRXlNakl0WkRZMll6VXhOakprTUdVMyJ9", 0, False

Set WshShell = Nothing
