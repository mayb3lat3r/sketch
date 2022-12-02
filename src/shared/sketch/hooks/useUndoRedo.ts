import { useSelector, useActions } from '@tramvai/state';
import { popToUndoAction, pushToRedoAction } from '../store/actions';
import { SketchStore } from '../store/store';

export const useUndoRedo = () => {
  const canvas = useSelector(
    SketchStore,
    (state) => state.sketchStore.canvasStore.canvas
  );

  const undoList = useSelector(
    SketchStore,
    (state) => state.sketchStore.canvasStore.undoList
  );

  const redoList = useSelector(
    SketchStore,
    (state) => state.sketchStore.canvasStore.redoList
  );

  const popToUndo = useActions(popToUndoAction);

  const pushToRedo = useActions(pushToRedoAction);

  if (!canvas) return [];
  const ctx = canvas.getContext('2d');

  const undo = () => {
    if (undoList.length) {
      const dataUrl = undoList[undoList.length - 1];

      popToUndo();
      pushToRedo(dataUrl);

      const img = new Image();

      img.src = dataUrl;
      img.onload = () => {
        ctx?.clearRect(0, 0, canvas.width, canvas.height);
        ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);
      };
      localStorage.setItem('dataUrl', dataUrl);
    } else {
      ctx?.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  const redo = () => {
    if (redoList.length) {
      const dataUrl = redoList[redoList.length - 1];

      const img = new Image();

      img.src = dataUrl;
      img.onload = () => {
        ctx?.clearRect(0, 0, canvas.width, canvas.height);
        ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);
      };
    }
  };

  return [undo, redo];
};
