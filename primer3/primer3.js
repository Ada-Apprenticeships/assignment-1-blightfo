// TODO: Implement the createLinkedList function
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  addNode(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }
}

function createLinkedList(posts) {
  // TODO: Check if the input 'posts' is valid (an array with at least one element)
  if (!Array.isArray(posts) || posts.length === 0) {
    throw new Error('Invalid input: posts should be a non-empty array');
  }

  const feed = new LinkedList();

  // TODO: Iterate through each post in the 'posts' array
  posts.forEach((post) => {
    // TODO: Validate the structure of each post (ensure it has 'text', 'timestamp', and 'author' properties with correct types and values)
    if (
      typeof post.text !== 'string' ||
      typeof post.timestamp !== 'string' ||
      typeof post.author !== 'string'
    ) {
      throw new Error('Invalid post structure');
    }
    // TODO: Create the linked list with the validated posts
    feed.addNode(post);
  });

  // TODO: Return the head of the linked list
  return feed;
}
  
  
  // TODO: Implement the searchSocialMediaFeed function
  function searchSocialMediaFeed(feed, keyword){
    // TODO: Handle the case where the feed is empty
    if (feed.head === null) {
      return [];
    }
  
    // TODO: Initialise an empty array to store the search results
    const results = [];
  
    // TODO: Normalise the keyword for case-insensitive search
    const normalizedKeyword = keyword.toLowerCase();
  
    // TODO: Split the keyword into individual words
    const keywordWords = normalizedKeyword.split(' ');
  
    // TODO: Traverse the linked list
    let current = feed.head;
    while (current !== null) {
      // TODO: Normalise the text of the current post for case-insensitive search
      const normalizedText = current.data.text.toLowerCase();
      
      // TODO: Check if any keyword word is partially present in the normalized text
      let match = false;
      for (const word of keywordWords) {
        if (normalizedText.includes(word)) {
          match = true;
          break;
        }
      }
      
      // TODO: If there's a partial match, add the current post to the results
      if (match) {
        results.push(current.data);
      }
  
      current = current.next;
    }
  }
    // TODO: Return the array of search results
    return results;



// ADDITIONAL TODO - The suggested functions above can be refactored into multiple functions if you think appropriate.

function validatePostsArray(posts) {
  if (!Array.isArray(posts) || posts.length === 0) {
    throw new Error('Invalid input: posts should be a non-empty array');
  }
}

function validatePostStructure(post) {
  if (
    typeof post.text !== 'string' ||
    typeof post.timestamp !== 'string' ||
    typeof post.author !== 'string'
  ) {
    throw new Error('Invalid post structure');
  }
}

function createLinkedList(posts) {
  // TODO: Check if the input 'posts' is valid (an array with at least one element)
  validatePostsArray(posts);

  const feed = new LinkedList();

  // TODO: Iterate through each post in the 'posts' array
  posts.forEach((post) => {
    // TODO: Validate the structure of each post (ensure it has 'text', 'timestamp', and 'author' properties with correct types and values)
    validatePostStructure(post);
    // TODO: Create the linked list with the validated posts
    feed.addNode(post);
  });

  // TODO: Return the head of the linked list
  return feed;

}

function normalizeText(text) {
  return text.toLowerCase();
}

function splitIntoWords(text) {
  return text.split(' ');
}

function keywordMatch(normalizedText, keywordWords) {
  for (const word of keywordWords) {
    if (normalizedText.includes(word)) {
      return true;
    }
  }
  return false;
}

function searchSocialMediaFeed(feed, keyword) {
  // TODO: Handle the case where the feed is empty
  if (feed.head === null) {
    return [];
  }

  // TODO: Initialise an empty array to store the search results
  const results = [];

  // TODO: Normalise the keyword for case-insensitive search
  const normalizedKeyword = normalizeText(keyword);

  // TODO: Split the keyword into individual words
  const keywordWords = splitIntoWords(normalizedKeyword);

  // TODO: Traverse the linked list
  let current = feed.head;
  while (current !== null) {
    // TODO: Normalise the text of the current post for case-insensitive search
    const normalizedText = normalizeText(current.data.text);

    // TODO: Check if any keyword word is partially present in the normalized text
    if (keywordMatch(normalizedText, keywordWords)) {
      // TODO: If there's a partial match, add the current post to the results
      results.push(current.data);
    }

    current = current.next;
  }

  // TODO: Return the array of search results
  return results;
}


export default {createLinkedList, searchSocialMediaFeed};
