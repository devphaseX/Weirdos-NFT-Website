export function combineClasses(styleClass: Array<string>) {
  return styleClass.join(' ');
}

const CANNOT_GET_FILE_PATH = (path: string) =>
  `Filename cannot be extracted from the file path
   expected path pattern '[[pre|no]folder]\\[name].[ext]' but got ${path}`;

interface PathError {
  message: string;
}

const filenamePattern = /(\w|-)+?\.\w+$/;

export function getFilePath(path: string) {
  let error: PathError | null = null;
  if (path === '') error = { message: CANNOT_GET_FILE_PATH('Empty path') };

  if (!error) {
    const match = path.match(filenamePattern);
    if (match) {
      return peek(match)!;
    }
  }
  error = error || { message: CANNOT_GET_FILE_PATH(path) };
  throw new TypeError(error.message);
}

function peek<T>(structure: Array<T>): T | null {
  return structure[0] ?? null;
}

export function createRangeMap<T>(
  range: number,
  mapFn: (interval: number) => T
): Array<T> {
  return Array.from({ length: range }, (_, i) => mapFn(i));
}

export function normalizeVirtualProp<S>(obj: S): S {
  return Object.assign({}, obj);
}

interface FileInfo {
  path: string;
  filename: string;
  filenameWithExt: string;
  ext: string;
  containDir: string;
}

function getFileExt(filename: string) {
  const fileInfo = filename.split('.');
  if ('at' in new String('')) {
    return fileInfo.at(-1)!;
  }
  return fileInfo.slice(-1)[0]!;
}

function escapeMetaRegexPattern(pattern: string) {
  return pattern.replace(/[\.*\\+$()[\]|{}]/g, '\\$&');
}

export function analyseFilePath(path: string): FileInfo {
  const filenameWithExt = getFilePath(path);
  return normalizeVirtualProp({
    get containDir() {
      return path.replace(
        new RegExp(escapeMetaRegexPattern(filenameWithExt)),
        ''
      );
    },
    ext: getFileExt(filenameWithExt),
    path,
    filenameWithExt,
    get filename() {
      return filenameWithExt.replace(
        new RegExp(`.${escapeMetaRegexPattern(this.ext)}`),
        ''
      );
    },
  });
}

type StyleClassName = string | undefined | null;

export function createValidStyleClassValue(
  styleClasses: Array<StyleClassName>
) {
  return styleClasses.map(allowStringWithNullFallback).join(' ');
}

const allowStringWithNullFallback = allowType(
  (value) => typeof value === 'string',
  null
);

export function allowType<V>(
  typePredicate: (value: any) => boolean,
  fallback: V
) {
  return function passAllowTypeThrough<T>(value: any): T | V {
    return typePredicate(value) ? (value as T) : fallback;
  };
}

export function randomNaiveId() {
  return Math.random().toString(32).slice(2);
}
