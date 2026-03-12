using System;
using System.Collections.Generic;
using System.Text;

namespace HandsOnW4D3
{
    internal class CalculatoUsingSwitch
    {
        static void Main()
        {
            Console.Write("Enter First Number: ");
            int a = Convert.ToInt32(Console.ReadLine());
            Console.Write("Enter Second Number: ");
            int b = Convert.ToInt32(Console.ReadLine());
            Console.Write("Enter Operator: ");
            string op = Console.ReadLine();
            double c;
            switch (op)
            {
                case "+":
                    c = a + b;
                    Console.WriteLine("Result: " + c);
                    break;
                case "-":
                    c = a - b;
                    Console.WriteLine("Result: " + c);
                    break;
                case "*":
                    c = a * b;
                    Console.WriteLine("Result: " + c);
                    break;
                case "/":
                    if (b != 0)
                    {
                        c = (double) a /b;
                        Console.WriteLine("Result: " + c);
                    }
                    else
                    {
                        Console.WriteLine("Error! Division by zero is not allowed.");
                    }
                    break;
                default:
                    Console.WriteLine("Invalid Operator!");
                    break;

            }
        }
    }
}
