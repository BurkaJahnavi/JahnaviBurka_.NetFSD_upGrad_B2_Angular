using System;
using System.Collections.Generic;
using System.Text;

namespace HandsOnW4D3
{
    internal class EmpBonusCal
    {
        static void Main()
        {
            Console.Write("Enter Name: ");
            string name = Console.ReadLine();

            Console.Write("Enter Salary: ");
            double salary = Convert.ToDouble(Console.ReadLine());

            Console.Write("Enter Experience: ");
            int ex = Convert.ToInt32(Console.ReadLine());

            double bonus = 0;
            if (ex < 2)
            {
                bonus = salary * 0.05;
            }
            else if (ex >= 2 && ex <= 5)
            {
                bonus = salary * 0.10;
            }
            else
            {
                bonus = salary * 0.15;
            }
            double fs = (bonus > 0) ? salary + bonus : salary;
            Console.WriteLine("Employee: " + name);
            Console.WriteLine("Bonus: " + bonus);
            Console.WriteLine("Final Salary: " + fs);
        }
    }
}
