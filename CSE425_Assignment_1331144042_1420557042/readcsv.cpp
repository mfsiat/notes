#include <iostream>
#include <fstream>
#include <sstream>
#include <string>
#include <vector>
#include <iterator>

class CsvRow
{
public:
	std::string const& operator[](std::size_t index) const
	{
		return m_data[index];
	}
	std::size_t size() const
	{
		return m_data.size();
	}

	void readNextRow(std::istream& str)
	{
		std::string line; 
		std::getline(str, line);
		std::stringstream lineStream(line);
		std::string cell;

		m_data.clear();
		while(std::getline(lineStream, cell, ','))
		{
			m_data.push_back(cell);
		}

		if(!lineStream && cell.empty())
		{
			m_data.push_back("");
		}
	}
private:
	std::vector<std::string> m_data;
};

std::istream& operator>>(std::istream& str, CsvRow& data)
{
	data.readNextRow(str);
	return str;
}

int main()
{
	std::ifstream file("data.csv");
	CsvRow row;
	int n;
	std::cout<<"Enter 1 to search with time:: "<<"\n";
	std::cout<<"Enter 2 to search with city:: "<<"\n";
	std::cin>>n;
	if(n==1)
	{
		std::string tm;
		std::cout<<"Enter the timestamp:: "<<"\n";
		std::cin>>tm;
		while(file >> row)
		{
			if(row[0] == tm)
			{
				std::cout<<"[ Timestamp:: "<<row[0]<<"-"<<row[1]<<"-"<<row[2]<<"-"<<row[3]<<"-"<<row[4]<<"-"<<row[5]<<"-"<<row[6]<<"-"<<row[7]<<" ]"<<"\n";
			}
		}

	}
	if(n==2)
	{
		std::string ct;
		std::cout<<"Enter the city name:: "<<"\n";
		std::cin>>ct;
		while(file >> row)
		{
			if(row[1] == ct)
			{
				std::cout<<"[ City:: "<<row[1]<<"-"<<row[0]<<"-"<<row[2]<<"-"<<row[3]<<"-"<<row[4]<<"-"<<row[5]<<"-"<<row[6]<<"-"<<row[7]<<" ]"<<"\n";
			}
		}

	}
	else
	{
		std::cout<<"Sorry! wrong input"<<"\n";
	}
}