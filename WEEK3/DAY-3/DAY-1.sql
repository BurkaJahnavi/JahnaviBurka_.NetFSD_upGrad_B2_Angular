---QUERY1---
SELECT 
    first_name,
    last_name,
    order_id,
    order_date,
    order_status
FROM customers c
INNER JOIN orders o
ON c.customer_id = o.customer_id
WHERE order_status = 1 OR order_status = 4
ORDER BY order_date DESC;

---QUERY2---
SELECT 
    product_name,
    brand_name,
    category_name,
    model_year,
    list_price
FROM products p
INNER JOIN brands b
ON p.brand_id = b.brand_id
INNER JOIN categories c
ON p.category_id = c.category_id
WHERE p.list_price > 500
ORDER BY p.list_price ASC;

---QUERY3---
SELECT 
    stores.store_name,
    SUM(order_items.quantity * order_items.list_price * (1 - order_items.discount)) AS total_sales
FROM stores
INNER JOIN orders
ON stores.store_id = orders.store_id
INNER JOIN order_items
ON orders.order_id = order_items.order_id
WHERE orders.order_status = 4
GROUP BY stores.store_name
ORDER BY total_sales DESC;


---QUERY4---
SELECT 
    product_name,
    store_name,
    s.quantity AS stock_quantity,
    SUM(o.quantity) AS total_sold
FROM stocks s
INNER JOIN products p
ON s.product_id = p.product_id
INNER JOIN stores st
ON s.store_id = st.store_id
LEFT JOIN order_items o
ON s.product_id = o.product_id
GROUP BY product_name, store_name, s.quantity
ORDER BY product_name;