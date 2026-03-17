using System;

namespace HandsOnW5D2
{
    internal class StackBasedUndoSys
    {
        static void Main()
        {
            int maxSize = 100;
            char[] stack = new char[maxSize]; // store typed characters only
            int top = -1;

            Console.WriteLine("Enter number of operations: ");
            int n = int.Parse(Console.ReadLine());

            for (int i = 0; i < n; i++)
            {
                Console.WriteLine("\nEnter action (Type <char> or Undo):");
                string action = Console.ReadLine();

                if (action.StartsWith("Type "))
                {
                    // Push operation (store only the character)
                    if (top >= maxSize - 1)
                    {
                        Console.WriteLine("Stack Overflow! Cannot add more actions.");
                    }
                    else
                    {
                        top++;
                        stack[top] = action[5]; // get the 6th char (after "Type ")
                    }
                }
                else if (action.Equals("Undo", StringComparison.OrdinalIgnoreCase))
                {
                    // Pop operation
                    if (top == -1)
                    {
                        Console.WriteLine("Nothing to undo. Stack is empty!");
                    }
                    else
                    {
                        Console.WriteLine($"Undoing action: {stack[top]}");
                        top--; // remove last character
                    }
                }
                else
                {
                    Console.WriteLine("Invalid action. Please enter 'Type <char>' or 'Undo'.");
                }

                // Display current text
                if (top == -1)
                {
                    Console.WriteLine("Current Text: (empty)");
                }
                else
                {
                    Console.Write("Current Text: ");
                    for (int j = 0; j <= top; j++)
                    {
                        Console.Write(stack[j]);
                    }
                    Console.WriteLine();
                }
            }
        }
    }
}