import { useSelector, useActions } from '@tramvai/state';
import { popToUndoAction } from '../store/actions';
import { SketchStore } from '../store/store';

export const useUndo = () => {
  const canvas = useSelector(
    SketchStore,
    (state) => state.sketchStore.canvasStore.canvas
  );

  const undoList = useSelector(
    SketchStore,
    (state) => state.sketchStore.canvasStore.undoList
  );

  const popToUndo = useActions(popToUndoAction);

  const undo = () => {
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    if (undoList.length > 0) {
      const dataUrl = undoList.pop();
      popToUndo();

      const img = new Image();

      img.src = dataUrl;
      img.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      };
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  return undo;
};
