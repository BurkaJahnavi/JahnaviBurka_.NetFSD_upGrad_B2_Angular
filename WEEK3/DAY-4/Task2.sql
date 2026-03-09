-- Customers who have placed orders
SELECT 
    CONCAT(c.first_name, ' ', c.last_name) AS full_name,
    total_orders.total_value,

    CASE
        WHEN total_orders.total_value > 10000 THEN 'Premium'
        WHEN total_orders.total_value BETWEEN 5000 AND 10000 THEN 'Regular'
        WHEN total_orders.total_value < 5000 THEN 'Basic'
    END AS customer_category

FROM customers c
JOIN (
        SELECT 
            o.customer_id,
            SUM(oi.quantity * oi.list_price * (1 - oi.discount)) AS total_value
        FROM orders o
        JOIN order_items oi
        ON o.order_id = oi.order_id
        GROUP BY o.customer_id
     ) AS total_orders

ON c.customer_id = total_orders.customer_id


UNION


-- Customers who have NOT placed any orders
SELECT 
    CONCAT(c.first_name, ' ', c.last_name) AS full_name,
    NULL AS total_value,
    'No Orders' AS customer_category

FROM customers c
WHERE c.customer_id NOT IN (
        SELECT customer_id
        FROM orders
);