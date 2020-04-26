import csv

def searchByCity():
    city = input('Enter city name\n')

    csv_file = csv.reader(open('data.csv', 'r'))

    for row in csv_file:
        if city == row[1]:
            print(row)

def searchByDate():
    year = str(input('Enter year to show data\n'))

    csv_file = csv.reader(open('data.csv', 'r'))

    for row in csv_file:
        if year in row[0]:
            print(row)

print('Enter 1 to search by city name')
print('Enter 2 to search by date')
src=int(input('Enter here:'))

if src==1:
    searchByCity()
elif src==2:
    searchByDate()
else:
    print("Sorry invalid input")