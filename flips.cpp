#include<iostream>
using namespace std;

int minflips(string pwd)
{
    int count=0;
    for(int i=0;i<pwd.size()-1;i=i+2)
    {
        if(pwd[i] != pwd[i+1])
        {
            count++;
        }
    }
    return count;
}

int main()
{
    string pwd = "1010";
    int result = minflips(pwd);
    cout << result << endl;
    return 0;
}
