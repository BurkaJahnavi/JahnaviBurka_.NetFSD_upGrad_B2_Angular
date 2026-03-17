using System;
using System.Collections.Generic;
using System.Text;

namespace HandsOnW5D2
{
    internal class studentScoreAnalyzer
    {
        static void Main()
        {
            Console.WriteLine("Enter the Marks: "); 
            string input = Console.ReadLine();
            int[] marks = input.Split(' ').Select(int.Parse).ToArray();

            Console.WriteLine("Enter threshold val: ");
            int threshold = int.Parse(Console.ReadLine());

            int totalMarks = marks.Sum();
            double avg = marks.Average();
            int highestScore = marks.Max();
            int countAboveThreshold = marks.Where(score => score > threshold).Count();
            Dictionary<string, int> subHighest = new Dictionary<string, int>();
            for(int i = 0; i < marks.Length; i++)
            {
                subHighest.Add($"Subject{i + 1}", marks[i]);
            }
            Console.WriteLine("\n--- Student Score Analysis ---");
            Console.WriteLine("Marks: " + string.Join(", ", marks));
            Console.WriteLine("Total Marks: " + totalMarks);
            Console.WriteLine("Average Marks: " + avg);
            Console.WriteLine("Highest Score: " + highestScore);
            Console.WriteLine($"Students above {threshold}: " + countAboveThreshold);
            Console.WriteLine("\nSubject-wise Highest Marks:");
            foreach (var kvp in subHighest)
            {
                Console.WriteLine($"{kvp.Key}: {kvp.Value}");
            }
        }
    }
}
