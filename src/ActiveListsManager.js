export const ActiveListsManager = (() => {
  let selectedLists = [];

  return {
    setSelectedLists: (lists) => {
      selectedLists = [...lists];
    },
    getSelectedLists: () => selectedLists,
  };
})();
