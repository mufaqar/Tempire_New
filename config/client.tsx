export const client = {
  create: async (doc: any) => {
 //   console.log("📝 Dummy create called with:", doc);
    return Promise.resolve({ _id: "dummy-id-123" });
  },
  assets: {
    upload: async (type: string, file: File, options: any) => {
      console.log("📂 Dummy upload called with:", { type, file, options });
      return Promise.resolve({
        _id: "dummy-asset-123",
        url: URL.createObjectURL(file), 
      });
    },
  },
};
