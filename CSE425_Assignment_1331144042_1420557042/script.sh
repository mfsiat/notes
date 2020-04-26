searchByCity()
{
echo "Enter city name to search: "
read city
grep $city data.csv
}

searchByDate()
{
echo "Enter date to search (Date Format: Year-Month-Day)"
read dateinput 
grep $dateinput data.csv
}

echo "Enter 1 to search by city name "
echo "Enter 2 to search by date "
read choice

if [ "$choice" -eq 1 ]; then
searchByCity
elif [ "$choice" -eq 2 ];then
searchByDate
else 
echo "Please enter a valid number (1 or 2)"
fi 

 
