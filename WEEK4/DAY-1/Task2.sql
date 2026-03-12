
--CREATING TRIGGER--

CREATE TRIGGER trg_after_insert_orderitems
ON order_items
AFTER INSERT
AS
BEGIN
    UPDATE s
    SET s.quantity = s.quantity - i.quantity
    FROM stocks s
    JOIN inserted i 
        ON s.product_id = i.product_id
END

--UPDATION --

UPDATE s
SET s.quantity = s.quantity - i.quantity
FROM stocks s
JOIN inserted i
    ON s.product_id = i.product_id

--PREVENT STOCKS FROM PREVENTION--

IF EXISTS (
    SELECT 1
    FROM stocks s
    JOIN inserted i 
        ON s.product_id = i.product_id
    WHERE s.quantity < i.quantity
)
BEGIN
    RAISERROR ('Stock cannot become negative',16,1)
    ROLLBACK TRANSACTION
END


-- CREATE TRIGGER INSERT ORDERITEMS--

CREATE TRIGGER trg_after_insert_orderitems
ON order_items
AFTER INSERT
AS
BEGIN

    IF EXISTS (
        SELECT 1
        FROM stocks s
        JOIN inserted i 
            ON s.product_id = i.product_id
        WHERE s.quantity < i.quantity
    )
    BEGIN
        RAISERROR ('Insufficient stock available',16,1)
        ROLLBACK TRANSACTION
        RETURN
    END

    UPDATE s
    SET s.quantity = s.quantity - i.quantity
    FROM stocks s
    JOIN inserted i
        ON s.product_id = i.product_id

END