let items = [];
let editId = null;

        // Create
        function handleSubmit() {
            const itemInput = document.getElementById('itemInput');
            const submitBtn = document.getElementById('submitBtn');

            if (itemInput.value.trim() === '') {
                alert('Please enter an item name');
                return;
            }

            if (editId !== null) {
                // Update existing item
                const index = items.findIndex(item => item.id === editId);
                items[index].name = itemInput.value;
                editId = null;
                submitBtn.textContent = 'Add Item';
                submitBtn.className = 'add-btn';
            } else {
                // Add new item
                const newItem = {
                    id: Date.now(),
                    name: itemInput.value
                };
                items.push(newItem);
            }

            itemInput.value = '';
            renderItems();
        }

        // Read
        function renderItems() {
            const itemList = document.getElementById('itemList');
            itemList.innerHTML = '';

            items.forEach(item => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${item.id}</td>
                    <td>${item.name}</td>
                    <td class="action-buttons">
                        <button onclick="editItem(${item.id})" class="edit-btn">Edit</button>
                        <button onclick="deleteItem(${item.id})" class="delete-btn">Delete</button>
                    </td>
                `;
                itemList.appendChild(row);
            });
        }

        // Update
        function editItem(id) {
            const item = items.find(item => item.id === id);
            const itemInput = document.getElementById('itemInput');
            const submitBtn = document.getElementById('submitBtn');

            itemInput.value = item.name;
            submitBtn.textContent = 'Update Item';
            submitBtn.className = 'update-btn';
            editId = id;
        }

        // Delete
        function deleteItem(id) {
            if (confirm('Are you sure you want to delete this item?')) {
                items = items.filter(item => item.id !== id);
                renderItems();
            }
        }

        // Initial render
        renderItems();