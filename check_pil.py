try:
    import PIL
    import PIL.Image
    print("PIL OK")
except ImportError:
    print("PIL MISSING")
