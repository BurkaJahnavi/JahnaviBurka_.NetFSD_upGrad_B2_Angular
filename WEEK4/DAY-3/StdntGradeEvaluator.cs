using System;
using System.Collections.Generic;
using System.Text;

namespace HandsOnW4D3
{
    internal class StdntGradeEvaluator
    {
        static void Main()
        {
            Console.Write("Enter Name: ");
            string name = Console.ReadLine();

            Console.Write("Enter Marks: ");
            int marks = Convert.ToInt32(Console.ReadLine());

            if (marks < 0 || marks > 100)
            {
                Console.WriteLine("Invalid marks. Please enter marks between 0 and 100.");
            }
            else if (marks >= 90)
            {
                Console.WriteLine("Student: " + name);
                Console.WriteLine("Grade: A");
            }
            else if (marks >= 75)
            {
                Console.WriteLine("Student: " + name);
                Console.WriteLine("Grade: B");
            }
            else if (marks >= 60)
            {
                Console.WriteLine("Student: " + name);
                Console.WriteLine("Grade: C");
            }
            else if (marks >= 50)
            {
                Console.WriteLine("Student: " + name);
                Console.WriteLine("Grade: D");
            }
            else
            {
                Console.WriteLine("Student: " + name);
                Console.WriteLine("Grade: Fail");
            }
        }
        
    }
}
