import { useSelector, useActions } from '@tramvai/state';
import { setIsLastBrowseAction } from '../store/actions';
import { setCurrentIndexFrameAction } from '../store/actions';
import { SketchStore } from '../store/store';

export const useUndoRedo = () => {
  const canvas = useSelector(
    SketchStore,
    ({ sketchStore }) => sketchStore.canvasStore.canvas
  );

  const currentIndexFrame = useSelector(
    SketchStore,
    ({ sketchStore }) => sketchStore.canvasStore.browser.currentIndexFrame
  );

  const history = useSelector(
    SketchStore,
    ({ sketchStore }) => sketchStore.canvasStore.browser.history
  );

  const setCurrentIndexFrame = useActions(setCurrentIndexFrameAction);
  const setIsLastBrowse = useActions(setIsLastBrowseAction);

  if (!canvas) return [];
  const ctx = canvas.getContext('2d');

  const undo = async () => {
    if (currentIndexFrame > 0) {
      await setIsLastBrowse(true);
      const undoIndex = currentIndexFrame - 1;

      const dataUrl = history[undoIndex];

      await setCurrentIndexFrame(undoIndex);

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

  const redo = async () => {
    if (history.length > 0) {
      await setIsLastBrowse(true);

      const redoIndex = currentIndexFrame + 1;

      const dataUrl = history[redoIndex] ? history[redoIndex] : null;

      if (!dataUrl) return;

      await setCurrentIndexFrame(redoIndex);

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
