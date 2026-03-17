using System;

namespace HandsOnW5D2
{
    internal class EmpManagementUsingLl
    {
        // Node structure
        class EmployeeNode
        {
            public int ID;
            public string Name;
            public EmployeeNode Next;

            public EmployeeNode(int id, string name)
            {
                ID = id;
                Name = name;
                Next = null;
            }
        }

        // Linked list class
        class EmployeeLinkedList
        {
            private EmployeeNode head;

            // Insert at beginning
            public void InsertAtBeginning(int id, string name)
            {
                EmployeeNode newNode = new EmployeeNode(id, name);
                newNode.Next = head;
                head = newNode;
            }

            // Insert at end
            public void InsertAtEnd(int id, string name)
            {
                EmployeeNode newNode = new EmployeeNode(id, name);
                if (head == null)
                {
                    head = newNode;
                    return;
                }

                EmployeeNode current = head;
                while (current.Next != null)
                {
                    current = current.Next;
                }
                current.Next = newNode;
            }

            // Delete by ID
            public void DeleteByID(int id)
            {
                if (head == null)
                {
                    Console.WriteLine("List is empty. Nothing to delete.");
                    return;
                }

                if (head.ID == id)
                {
                    head = head.Next;
                    Console.WriteLine($"Employee with ID {id} deleted.");
                    return;
                }

                EmployeeNode current = head;
                while (current.Next != null && current.Next.ID != id)
                {
                    current = current.Next;
                }

                if (current.Next == null)
                {
                    Console.WriteLine($"Employee with ID {id} not found.");
                }
                else
                {
                    current.Next = current.Next.Next;
                    Console.WriteLine($"Employee with ID {id} deleted.");
                }
            }

            // Display list
            public void DisplayList()
            {
                if (head == null)
                {
                    Console.WriteLine("Employee list is empty.");
                    return;
                }

                EmployeeNode current = head;
                Console.WriteLine("\nEmployee List:");
                while (current != null)
                {
                    Console.WriteLine($"{current.ID} - {current.Name}");
                    current = current.Next;
                }
            }
        }

        // Main method
        static void Main()
        {
            EmployeeLinkedList empList = new EmployeeLinkedList();

            // Sample insertions
            empList.InsertAtEnd(101, "John");
            empList.InsertAtEnd(102, "Sara");
            empList.InsertAtEnd(103, "Mike");

            Console.WriteLine("Employee list after insertion:");
            empList.DisplayList();

            // Delete an employee
            empList.DeleteByID(102);

            Console.WriteLine("\nEmployee list after deletion:");
            empList.DisplayList();

            // Insert at beginning
            empList.InsertAtBeginning(100, "Anna");
            Console.WriteLine("\nEmployee list after inserting at beginning:");
            empList.DisplayList();
        }
    }
}