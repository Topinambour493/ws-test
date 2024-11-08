const fetchData = async () => {
    try {
        // Simulate an API call
        const response = await new Promise(resolve => {
            setTimeout(() => resolve({ data: 'Sample Data' }), 1000);
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

export { fetchData };