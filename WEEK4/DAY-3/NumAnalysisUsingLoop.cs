using System;
using System.Collections.Generic;
using System.Text;

namespace HandsOnW4D3
{
    internal class NumAnalysisUsingLoop
    {
        static void Main()
        {
            Console.Write("Enter Number: ");
            int n = Convert.ToInt32(Console.ReadLine());
            int ec = 0, oc = 0, sum = 0;
            for(int i = 1; i <= n; i++)
            {
                if (i % 2 == 0)
                {
                    ec += 1;
                }
                else
                {
                    oc += 1;
                }
            }
            sum = n*(n + 1) / 2;
            Console.WriteLine("Even Count: " + ec);
            Console.WriteLine("Odd Count: " + oc);
            Console.WriteLine("Sum: " + sum);

        }
    }
}
