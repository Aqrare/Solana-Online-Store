const useIPFS = (hash, filename) => {
  return `https://blue-successful-loon-817.mypinata.cloud/ipfs/${hash}`;
  // return `https://blue-successful-loon-817.mypinata.cloud/ipfs/${hash}?filename=${filename}`;
};

export default useIPFS;
