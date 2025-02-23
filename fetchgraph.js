const OPEN_GRAPH_API_KEY = "cb730343-b6dd-46a4-92c3-1f6283d3bc7f";

async function getFromOpenGraphIo(url) {
    try {
        const proxyUrl = `https://opengraph.io/api/1.1/site/${encodeURIComponent(url)}?accept_lang=auto&use_proxy=true&app_id=${OPEN_GRAPH_API_KEY}`;
        const response = await fetch(proxyUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Raw data from OpenGraph.io:', data); // Debugging step

        const ogProperties = {};

        if (data.hybridGraph) {
            ogProperties.image = data.hybridGraph.image;
            ogProperties.site_name = data.hybridGraph.site_name;
            ogProperties.title = data.hybridGraph.title;
            ogProperties.url = data.hybridGraph.url;
        }

        console.log('Fetched OpenGraph properties:', ogProperties);
        return ogProperties;
    } catch (error) {
        console.error('Error fetching OpenGraph properties:', error);
        return null;
    }
}